import { Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface FeaturedTermProps {
  term: string
  definition: string
}

export function FeaturedTerm({ term, definition }: FeaturedTermProps) {
  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-primary" />
          <Badge variant="secondary" className="text-xs">
            Featured Term
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="mb-2 text-2xl font-bold text-primary">{term}</h3>
        <p className="text-muted-foreground leading-relaxed">{definition}</p>
      </CardContent>
    </Card>
  )
}
