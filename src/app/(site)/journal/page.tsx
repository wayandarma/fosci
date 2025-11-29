import { Suspense } from 'react'
import { JournalControls } from '@/components/journal/JournalControls'
import { ArticleCard } from '@/components/journal/ArticleCard'
import { Pagination } from '@/components/journal/Pagination'
import { NoResults } from '@/components/journal/NoResults'
import { client } from '@/sanity/lib/client'
import { getPostsQuery, getPostsCountQuery, categoriesQuery } from '@/sanity/lib/queries'
import { Post, Category } from '@/types/sanity'

const ITEMS_PER_PAGE = 9 // Adjusted to 9 for better grid alignment (3x3)

interface JournalPageProps {
  searchParams: Promise<{ q?: string; category?: string; page?: string }>
}

export const revalidate = 60 // Revalidate every minute

export default async function JournalPage({ searchParams }: JournalPageProps) {
  const params = await searchParams
  const query = params.q ?? ''
  const categorySlug = params.category ?? null
  const currentPage = Math.max(1, parseInt(params.page ?? '1', 10))

  // Calculate pagination range
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE

  // Fetch data in parallel
  const [posts, totalPosts, categories] = await Promise.all([
    client.fetch<Post[]>(getPostsQuery, {
      keyword: query || null,
      categorySlug,
      start,
      end
    }),
    client.fetch<number>(getPostsCountQuery, {
      keyword: query || null,
      categorySlug
    }),
    client.fetch<Category[]>(categoriesQuery)
  ])

  const totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE)

  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">The Journal</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Evidence-based insights into food science, nutrition, and culinary chemistry
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="mx-auto mb-12 max-w-xl">
        <Suspense fallback={<div className="h-24" />}>
          <JournalControls categories={categories} />
        </Suspense>
      </div>

      {/* Results Count */}
      {totalPosts > 0 && (
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Showing {start + 1}-{Math.min(end, totalPosts)} of {totalPosts} articles
        </p>
      )}

      {/* Articles Grid or No Results */}
      {posts.length > 0 ? (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post._id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Suspense fallback={null}>
              <Pagination currentPage={currentPage} totalPages={totalPages} />
            </Suspense>
          )}
        </>
      ) : (
        <NoResults query={query} category={categorySlug || ''} />
      )}
    </div>
  )
}
