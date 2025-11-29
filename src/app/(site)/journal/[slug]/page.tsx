import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScientificVerdict } from '@/components/journal/ScientificVerdict'
import { ArticleCard } from '@/components/journal/ArticleCard'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { postBySlugQuery, getPostsQuery } from '@/sanity/lib/queries'
import { Post } from '@/types/sanity'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 60 // Revalidate every minute

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params

  const post = await client.fetch<Post>(postBySlugQuery, { slug })

  if (!post) {
    notFound()
  }

  // Fetch related articles (same category, excluding current)
  // We use the first category to find related posts
  const categorySlug = post.categories?.[0]?.slug?.current
  const relatedPosts = categorySlug
    ? await client.fetch<Post[]>(getPostsQuery, {
      categorySlug,
      start: 0,
      end: 2, // Fetch 2 related articles
      keyword: null
    })
    : []

  // Filter out the current post from related posts if it appears
  const filteredRelatedPosts = relatedPosts
    .filter(p => p._id !== post._id)
    .slice(0, 2)

  return (
    <article className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      {/* Back Link */}
      <Link
        href="/journal"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to Journal
      </Link>

      {/* Article Header */}
      <header className="mx-auto max-w-3xl">
        {post.categories?.[0] && (
          <Badge variant="secondary" className="mb-4">
            {post.categories[0].title}
          </Badge>
        )}

        <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            {post.excerpt}
          </p>
        )}

        {/* Author & Date */}
        <div className="mt-8 flex items-center gap-4">
          {post.author?.image ? (
            <div className="relative size-12 overflow-hidden rounded-full">
              <Image
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="size-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
          )}
          <div>
            <p className="font-medium">{post.author?.name || 'FoodSci Team'}</p>
            {post.author?.bio && (
              <p className="text-sm text-muted-foreground">{post.author.bio}</p>
            )}
          </div>
        </div>

        {post.publishedAt && (
          <time className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="size-4" />
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        )}
      </header>

      {/* Main Image */}
      {post.mainImage && (
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-muted">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      <Separator className="mx-auto my-12 max-w-3xl" />

      {/* Article Content */}
      <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
        {post.body ? (
          <PortableText
            value={post.body}
            components={{
              block: {
                h2: ({ children }) => <h2 className="mt-10 text-2xl font-bold">{children}</h2>,
                h3: ({ children }) => <h3 className="mt-8 text-xl font-bold">{children}</h3>,
                normal: ({ children }) => <p className="leading-relaxed text-foreground/90">{children}</p>,
                blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 italic">{children}</blockquote>,
              },
              list: {
                bullet: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
                number: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
              }
            }}
          />
        ) : (
          <p className="italic text-muted-foreground">No content available.</p>
        )}

        {/* Scientific Verdict */}
        {post.scientificVerdict && (
          <ScientificVerdict
            verdict={post.scientificVerdict}
            type="complex" // Defaulting to complex as we don't have this field in schema yet
          />
        )}
      </div>

      {/* Related Articles */}
      {filteredRelatedPosts.length > 0 && (
        <section className="mx-auto mt-20 max-w-4xl border-t pt-12">
          <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {filteredRelatedPosts.map((relatedPost) => (
              <ArticleCard key={relatedPost._id} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
