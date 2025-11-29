import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { urlFor } from '@/sanity/lib/image'
import { Post } from '@/types/sanity'

interface ArticleCardProps {
  post: Post
}

export function ArticleCard({ post }: ArticleCardProps) {
  const { title, excerpt, slug, mainImage, publishedAt, categories } = post
  const category = categories?.[0]

  return (
    <Link href={`/journal/${slug.current}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          {mainImage ? (
            <Image
              src={urlFor(mainImage).url()}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-secondary text-muted-foreground">
              <span className="text-sm">No Image</span>
            </div>
          )}
        </div>

        <CardHeader className="flex-1 space-y-2 p-5">
          <div className="flex items-center justify-between">
            {category && (
              <Badge variant="secondary" className="font-medium">
                {category.title}
              </Badge>
            )}
            {publishedAt && (
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="mr-1 size-3" />
                {new Date(publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
            )}
          </div>
          <h3 className="line-clamp-2 text-xl font-bold leading-tight tracking-tight group-hover:text-primary">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="p-5 pt-0">
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {excerpt}
          </p>
        </CardContent>

        <CardFooter className="p-5 pt-0">
          <span className="text-sm font-medium text-primary underline-offset-4 group-hover:underline">
            Read Article &rarr;
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
