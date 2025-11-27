'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { ArticleCard } from './ArticleCard'

interface Article {
  id: string
  title: string
  excerpt: string
  slug: string
  category: string
  categorySlug: string
  publishedAt: string
}

const dummyArticles: Article[] = [
  {
    id: '1',
    title: 'The Truth About Superfoods: Marketing vs. Science',
    excerpt: 'Are superfoods really super? We dive into the research behind quinoa, acai, and other trendy ingredients.',
    slug: 'truth-about-superfoods',
    category: 'Myth Busting',
    categorySlug: 'myth-busting',
    publishedAt: 'Nov 20, 2024',
  },
  {
    id: '2',
    title: 'Understanding the Maillard Reaction in Cooking',
    excerpt: 'The chemistry behind browning and why it makes food taste so delicious.',
    slug: 'maillard-reaction-cooking',
    category: 'Ingredients',
    categorySlug: 'ingredients',
    publishedAt: 'Nov 18, 2024',
  },
  {
    id: '3',
    title: 'Protein Myths: How Much Do You Really Need?',
    excerpt: 'Separating fact from fiction when it comes to daily protein requirements and muscle building.',
    slug: 'protein-myths',
    category: 'Nutrition',
    categorySlug: 'nutrition',
    publishedAt: 'Nov 15, 2024',
  },
  {
    id: '4',
    title: 'The Science of Fermentation: From Kimchi to Kombucha',
    excerpt: 'How beneficial bacteria transform simple ingredients into probiotic powerhouses.',
    slug: 'science-of-fermentation',
    category: 'Ingredients',
    categorySlug: 'ingredients',
    publishedAt: 'Nov 12, 2024',
  },
  {
    id: '5',
    title: 'Does Organic Really Mean Healthier?',
    excerpt: 'A comprehensive look at what organic certification actually guarantees and what it doesn\'t.',
    slug: 'organic-healthier',
    category: 'Myth Busting',
    categorySlug: 'myth-busting',
    publishedAt: 'Nov 10, 2024',
  },
  {
    id: '6',
    title: 'Micronutrients: The Overlooked Essentials',
    excerpt: 'Why vitamins and minerals matter more than macros for long-term health.',
    slug: 'micronutrients-essentials',
    category: 'Nutrition',
    categorySlug: 'nutrition',
    publishedAt: 'Nov 8, 2024',
  },
]

export function JournalContent() {
  const searchParams = useSearchParams()
  
  const query = searchParams.get('q')?.toLowerCase() ?? ''
  const category = searchParams.get('category') ?? ''

  const filteredArticles = useMemo(() => {
    return dummyArticles.filter((article) => {
      // Filter by category
      if (category && article.categorySlug !== category) {
        return false
      }
      
      // Filter by search query
      if (query) {
        const searchableText = `${article.title} ${article.excerpt}`.toLowerCase()
        if (!searchableText.includes(query)) {
          return false
        }
      }
      
      return true
    })
  }, [query, category])

  if (filteredArticles.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-muted-foreground">
          No articles found matching your criteria.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Try adjusting your search or filter settings.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {filteredArticles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          excerpt={article.excerpt}
          slug={article.slug}
          category={article.category}
          publishedAt={article.publishedAt}
        />
      ))}
    </div>
  )
}
