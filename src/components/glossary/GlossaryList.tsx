'use client'

import { useMemo } from 'react'
import { Separator } from '@/components/ui/separator'
import { GlossaryTerm } from '@/types/sanity'

interface GlossaryListProps {
  terms: GlossaryTerm[]
  searchQuery: string
}

export function GlossaryList({ terms, searchQuery }: GlossaryListProps) {
  // Group terms by first letter
  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {}
    terms.forEach((term) => {
      const letter = term.term[0].toUpperCase()
      if (!groups[letter]) {
        groups[letter] = []
      }
      groups[letter].push(term)
    })
    return groups
  }, [terms])

  const sortedLetters = Object.keys(groupedTerms).sort()

  return (
    <div className="space-y-8">
      {sortedLetters.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No terms found matching &quot;{searchQuery}&quot;
        </p>
      ) : (
        sortedLetters.map((letter) => (
          <div key={letter}>
            <h2 className="mb-4 text-2xl font-bold text-primary">{letter}</h2>
            <div className="space-y-0">
              {groupedTerms[letter].map((item, index) => (
                <div key={item._id}>
                  <div className="grid gap-2 py-4 md:grid-cols-[200px_1fr] md:gap-8">
                    <h3 className="font-semibold">{item.term}</h3>
                    <p className="text-muted-foreground">{item.definition}</p>
                  </div>
                  {index < groupedTerms[letter].length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

