'use client'

import { useState, useMemo } from 'react'
import { Separator } from '@/components/ui/separator'
import { GlossarySearch } from './GlossarySearch'
import { FeaturedTerm } from './FeaturedTerm'

interface GlossaryTerm {
  id: string
  term: string
  definition: string
}

const dummyTerms: GlossaryTerm[] = [
  {
    id: '1',
    term: 'Antioxidant',
    definition: 'A substance that inhibits oxidation, especially one used to counteract the deterioration of stored food products or remove potentially damaging oxidizing agents in a living organism.',
  },
  {
    id: '2',
    term: 'Browning Reaction',
    definition: 'A chemical process that produces brown pigments in foods, typically through the Maillard reaction or caramelization, contributing to flavor and color development.',
  },
  {
    id: '3',
    term: 'Caramelization',
    definition: 'The oxidation of sugar, a process used extensively in cooking for the resulting nutty flavor and brown color.',
  },
  {
    id: '4',
    term: 'Denaturation',
    definition: 'The process by which proteins lose their native structure when exposed to heat, acid, or other denaturing agents, often resulting in textural changes.',
  },
  {
    id: '5',
    term: 'Emulsification',
    definition: 'The process of combining two liquids that normally don\'t mix (like oil and water) into a stable, uniform mixture using an emulsifying agent.',
  },
  {
    id: '6',
    term: 'Fermentation',
    definition: 'A metabolic process that produces chemical changes in organic substrates through the action of enzymes, commonly used to produce alcohol, bread, and preserved foods.',
  },
  {
    id: '7',
    term: 'Gluten',
    definition: 'A group of proteins found in wheat and related grains that gives dough its elastic texture and helps it rise and maintain its shape.',
  },
  {
    id: '8',
    term: 'Hydrogenation',
    definition: 'A chemical reaction that adds hydrogen to unsaturated fats, converting liquid oils into solid or semi-solid fats.',
  },
  {
    id: '9',
    term: 'Isoflavones',
    definition: 'A class of phytoestrogens found primarily in soybeans that have been studied for potential health benefits.',
  },
  {
    id: '10',
    term: 'Maillard Reaction',
    definition: 'A chemical reaction between amino acids and reducing sugars that gives browned food its distinctive flavor and color.',
  },
]

const featuredTerm = {
  term: 'Maillard Reaction',
  definition: 'Named after French chemist Louis-Camille Maillard, this is the chemical reaction between amino acids and reducing sugars that gives browned food its distinctive flavor. It\'s responsible for the delicious crust on bread, the sear on a steak, and the rich color of roasted coffee.',
}

export function GlossaryList() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTerms = useMemo(() => {
    if (!searchQuery) return dummyTerms
    const query = searchQuery.toLowerCase()
    return dummyTerms.filter(
      (item) =>
        item.term.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query)
    )
  }, [searchQuery])

  // Group terms by first letter
  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {}
    filteredTerms.forEach((term) => {
      const letter = term.term[0].toUpperCase()
      if (!groups[letter]) {
        groups[letter] = []
      }
      groups[letter].push(term)
    })
    return groups
  }, [filteredTerms])

  const sortedLetters = Object.keys(groupedTerms).sort()

  return (
    <div className="space-y-10">
      {/* Featured Term */}
      {!searchQuery && (
        <FeaturedTerm term={featuredTerm.term} definition={featuredTerm.definition} />
      )}

      {/* Search */}
      <GlossarySearch onSearch={setSearchQuery} />

      {/* Terms List */}
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
                  <div key={item.id}>
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
    </div>
  )
}
