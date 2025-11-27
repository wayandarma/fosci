import { SearchX } from 'lucide-react'

interface NoResultsProps {
  query?: string
  category?: string
}

export function NoResults({ query, category }: NoResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-muted">
        <SearchX className="size-8 text-muted-foreground" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">No articles found</h3>
      <p className="max-w-md text-muted-foreground">
        {query && category ? (
          <>
            No results for &quot;{query}&quot; in {category.replace('-', ' ')} category.
          </>
        ) : query ? (
          <>
            No articles matching &quot;{query}&quot;. Try different keywords.
          </>
        ) : category ? (
          <>
            No articles in the {category.replace('-', ' ')} category yet.
          </>
        ) : (
          <>No articles available at the moment. Check back soon!</>
        )}
      </p>
    </div>
  )
}
