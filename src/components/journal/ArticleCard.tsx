import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export interface ArticleCardProps {
  title: string
  excerpt: string
  slug: string
  category: string
  publishedAt: string
  imageUrl?: string
}

export function ArticleCard({
  title,
  excerpt,
  slug,
  category,
  publishedAt,
}: ArticleCardProps) {
  return (
    <Link href={`/journal/${slug}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
        {/* Image Placeholder */}
        <div className="aspect-[16/10] w-full bg-gradient-to-br from-primary/10 via-secondary to-accent/10" />
        
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <time className="text-xs text-muted-foreground">{publishedAt}</time>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
