import { Suspense } from 'react'
import { JournalControls } from '@/components/journal/JournalControls'
import { ArticleCard } from '@/components/journal/ArticleCard'
import { Pagination } from '@/components/journal/Pagination'
import { NoResults } from '@/components/journal/NoResults'

const ITEMS_PER_PAGE = 10

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
  { id: '1', title: 'The Truth About Superfoods: Marketing vs. Science', excerpt: 'Are superfoods really super? We dive into the research behind quinoa, acai, and other trendy ingredients.', slug: 'truth-about-superfoods', category: 'Myth Busting', categorySlug: 'myth-busting', publishedAt: 'Nov 25, 2024' },
  { id: '2', title: 'Understanding the Maillard Reaction in Cooking', excerpt: 'The chemistry behind browning and why it makes food taste so delicious.', slug: 'maillard-reaction', category: 'Ingredients', categorySlug: 'ingredients', publishedAt: 'Nov 24, 2024' },
  { id: '3', title: 'Protein Myths: How Much Do You Really Need?', excerpt: 'Separating fact from fiction when it comes to daily protein requirements.', slug: 'protein-myths', category: 'Nutrition', categorySlug: 'nutrition', publishedAt: 'Nov 23, 2024' },
  { id: '4', title: 'The Science of Fermentation', excerpt: 'How beneficial bacteria transform simple ingredients into probiotic powerhouses.', slug: 'science-fermentation', category: 'Ingredients', categorySlug: 'ingredients', publishedAt: 'Nov 22, 2024' },
  { id: '5', title: 'Does Organic Really Mean Healthier?', excerpt: 'A comprehensive look at what organic certification actually guarantees.', slug: 'organic-healthier', category: 'Myth Busting', categorySlug: 'myth-busting', publishedAt: 'Nov 21, 2024' },
  { id: '6', title: 'Micronutrients: The Overlooked Essentials', excerpt: 'Why vitamins and minerals matter more than macros for long-term health.', slug: 'micronutrients', category: 'Nutrition', categorySlug: 'nutrition', publishedAt: 'Nov 20, 2024' },
  { id: '7', title: 'The Chemistry of Caramelization', excerpt: 'What happens when sugar meets heat and why it creates such complex flavors.', slug: 'caramelization', category: 'Ingredients', categorySlug: 'ingredients', publishedAt: 'Nov 19, 2024' },
  { id: '8', title: 'Debunking the Detox Diet Myth', excerpt: 'Your liver and kidneys already do an excellent job—here\'s the science.', slug: 'detox-diet-myth', category: 'Myth Busting', categorySlug: 'myth-busting', publishedAt: 'Nov 18, 2024' },
  { id: '9', title: 'Understanding Glycemic Index', excerpt: 'How different carbohydrates affect blood sugar and energy levels.', slug: 'glycemic-index', category: 'Nutrition', categorySlug: 'nutrition', publishedAt: 'Nov 17, 2024' },
  { id: '10', title: 'The Science Behind Umami', excerpt: 'Exploring the fifth taste and why it makes food so satisfying.', slug: 'umami-science', category: 'Ingredients', categorySlug: 'ingredients', publishedAt: 'Nov 16, 2024' },
  { id: '11', title: 'Is Breakfast Really the Most Important Meal?', excerpt: 'Examining the evidence behind this common nutritional advice.', slug: 'breakfast-myth', category: 'Myth Busting', categorySlug: 'myth-busting', publishedAt: 'Nov 15, 2024' },
  { id: '12', title: 'Omega-3s: Sources and Benefits', excerpt: 'A deep dive into essential fatty acids and their role in health.', slug: 'omega-3-benefits', category: 'Nutrition', categorySlug: 'nutrition', publishedAt: 'Nov 14, 2024' },
  { id: '13', title: 'How Salt Enhances Flavor', excerpt: 'The science of sodium and why a pinch transforms every dish.', slug: 'salt-flavor', category: 'Ingredients', categorySlug: 'ingredients', publishedAt: 'Nov 13, 2024' },
  { id: '14', title: 'The MSG Controversy Explained', excerpt: 'Why monosodium glutamate is actually safe despite decades of fear.', slug: 'msg-controversy', category: 'Myth Busting', categorySlug: 'myth-busting', publishedAt: 'Nov 12, 2024' },
  { id: '15', title: 'Fiber: The Unsung Hero of Nutrition', excerpt: 'How dietary fiber supports gut health and overall wellbeing.', slug: 'fiber-nutrition', category: 'Nutrition', categorySlug: 'nutrition', publishedAt: 'Nov 11, 2024' },
  { id: '16', title: 'The Role of Acids in Cooking', excerpt: 'From citrus to vinegar: how acids balance and brighten flavors.', slug: 'acids-cooking', category: 'Ingredients', categorySlug: 'ingredients', publishedAt: 'Nov 10, 2024' },
  { id: '17', title: 'Carbs Are Not the Enemy', excerpt: 'Why demonizing an entire macronutrient group misses the point.', slug: 'carbs-not-enemy', category: 'Myth Busting', categorySlug: 'myth-busting', publishedAt: 'Nov 9, 2024' },
  { id: '18', title: 'Hydration and Performance', excerpt: 'The science of water intake and its effects on body and mind.', slug: 'hydration-performance', category: 'Nutrition', categorySlug: 'nutrition', publishedAt: 'Nov 8, 2024' },
  { id: '19', title: 'Understanding Emulsification', excerpt: 'How oil and water come together in mayonnaise, dressings, and sauces.', slug: 'emulsification', category: 'Ingredients', categorySlug: 'ingredients', publishedAt: 'Nov 7, 2024' },
  { id: '20', title: 'Do We Really Need 8 Glasses of Water?', excerpt: 'The truth about daily hydration requirements and individual needs.', slug: 'eight-glasses-myth', category: 'Myth Busting', categorySlug: 'myth-busting', publishedAt: 'Nov 6, 2024' },
  { id: '21', title: 'Antioxidants: Beyond the Buzzword', excerpt: 'What antioxidants actually do and the best food sources.', slug: 'antioxidants-explained', category: 'Nutrition', categorySlug: 'nutrition', publishedAt: 'Nov 5, 2024' },
  { id: '22', title: 'The Chemistry of Chocolate', excerpt: 'Why chocolate is so complex and how tempering creates perfect texture.', slug: 'chocolate-chemistry', category: 'Ingredients', categorySlug: 'ingredients', publishedAt: 'Nov 4, 2024' },
  { id: '23', title: 'Natural vs. Added Sugars', excerpt: 'Understanding the difference and what it means for your health.', slug: 'natural-added-sugars', category: 'Nutrition', categorySlug: 'nutrition', publishedAt: 'Nov 3, 2024' },
  { id: '24', title: 'The Gluten-Free Trend Examined', excerpt: 'Who actually needs to avoid gluten and who\'s just following a fad.', slug: 'gluten-free-trend', category: 'Myth Busting', categorySlug: 'myth-busting', publishedAt: 'Nov 2, 2024' },
  { id: '25', title: 'Probiotics and Gut Health', excerpt: 'The latest research on beneficial bacteria and digestive wellness.', slug: 'probiotics-gut-health', category: 'Nutrition', categorySlug: 'nutrition', publishedAt: 'Nov 1, 2024' },
]

interface JournalPageProps {
  searchParams: Promise<{ q?: string; category?: string; page?: string }>
}

export default async function JournalPage({ searchParams }: JournalPageProps) {
  const params = await searchParams
  const query = params.q?.toLowerCase() ?? ''
  const category = params.category ?? ''
  const currentPage = Math.max(1, parseInt(params.page ?? '1', 10))

  // Filter articles
  const filteredArticles = dummyArticles.filter((article) => {
    if (category && article.categorySlug !== category) {
      return false
    }
    if (query) {
      const searchableText = `${article.title} ${article.excerpt}`.toLowerCase()
      if (!searchableText.includes(query)) {
        return false
      }
    }
    return true
  })

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE)
  const validPage = Math.min(currentPage, Math.max(1, totalPages))
  const startIndex = (validPage - 1) * ITEMS_PER_PAGE
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE)

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
          <JournalControls />
        </Suspense>
      </div>

      {/* Results Count */}
      {filteredArticles.length > 0 && (
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredArticles.length)} of {filteredArticles.length} articles
        </p>
      )}

      {/* Articles Grid or No Results */}
      {paginatedArticles.length > 0 ? (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedArticles.map((article) => (
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

          {/* Pagination */}
          <Suspense fallback={null}>
            <Pagination currentPage={validPage} totalPages={totalPages} />
          </Suspense>
        </>
      ) : (
        <NoResults query={query} category={category} />
      )}
    </div>
  )
}
