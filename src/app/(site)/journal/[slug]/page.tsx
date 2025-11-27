import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScientificVerdict } from '@/components/journal/ScientificVerdict'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

const dummyArticle = {
  title: 'The Truth About Superfoods: Marketing vs. Science',
  excerpt: 'Are superfoods really super? We dive into the research behind quinoa, acai, and other trendy ingredients.',
  slug: 'truth-about-superfoods',
  category: 'Myth Busting',
  publishedAt: 'November 20, 2024',
  author: {
    name: 'Dr. Sarah Chen',
    bio: 'Food Scientist & Nutritional Researcher',
  },
  verdict: 'While many so-called "superfoods" do contain beneficial nutrients, the term itself is primarily a marketing construct. A balanced diet with a variety of whole foods is more important than focusing on any single "miracle" ingredient.',
  verdictType: 'complex' as const,
  content: `
    <p>The term "superfood" has become ubiquitous in health food marketing, but what does it actually mean from a scientific perspective? The short answer: not much.</p>
    
    <h2>The Origin of Superfoods</h2>
    <p>The concept of superfoods emerged in the early 20th century, primarily as a marketing tool. Unlike terms such as "organic" or "natural," there is no official definition or regulatory standard for what constitutes a superfood.</p>
    
    <h2>The Science Behind the Claims</h2>
    <p>Many foods labeled as superfoods do contain high concentrations of certain nutrients. Blueberries, for example, are rich in antioxidants. Salmon provides omega-3 fatty acids. Kale offers vitamins K, A, and C.</p>
    
    <p>However, the leap from "contains nutrients" to "super" is where marketing takes over from science. Most nutritional studies showing dramatic health benefits are conducted using concentrated extracts at doses far exceeding what you'd get from normal food consumption.</p>
    
    <h2>The Balanced Approach</h2>
    <p>Rather than focusing on individual superfoods, nutritional science consistently supports a varied diet rich in fruits, vegetables, whole grains, and lean proteins. No single food can provide all the nutrients your body needs.</p>
  `,
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  
  // In production, fetch article by slug from Sanity
  console.log('Loading article:', slug)
  const article = dummyArticle

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
        <Badge variant="secondary" className="mb-4">
          {article.category}
        </Badge>
        
        <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          {article.title}
        </h1>
        
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          {article.excerpt}
        </p>

        {/* Author & Date */}
        <div className="mt-8 flex items-center gap-4">
          <div className="size-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
          <div>
            <p className="font-medium">{article.author.name}</p>
            <p className="text-sm text-muted-foreground">{article.author.bio}</p>
          </div>
        </div>
        
        <time className="mt-4 block text-sm text-muted-foreground">
          {article.publishedAt}
        </time>
      </header>

      {/* Main Image Placeholder */}
      <div className="mx-auto mt-10 max-w-4xl">
        <div className="aspect-[21/9] w-full rounded-xl bg-gradient-to-br from-primary/10 via-secondary to-accent/10" />
      </div>

      <Separator className="mx-auto my-12 max-w-3xl" />

      {/* Article Content */}
      <div className="prose prose-lg mx-auto max-w-3xl">
        <div 
          className="space-y-6 text-lg leading-relaxed [&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:font-bold [&>p]:text-foreground/90"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* Scientific Verdict */}
        <ScientificVerdict 
          verdict={article.verdict} 
          type={article.verdictType} 
        />
      </div>

      {/* Related Articles Placeholder */}
      <section className="mx-auto mt-20 max-w-3xl">
        <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[1, 2].map((i) => (
            <div 
              key={i}
              className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <Badge variant="secondary" className="mb-3 text-xs">
                Nutrition
              </Badge>
              <h3 className="font-semibold transition-colors hover:text-primary">
                Understanding Antioxidants: Beyond the Buzzword
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                What antioxidants actually do and why balance matters.
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
