'use client'

import { useState, useMemo } from 'react'
import { GlossaryTerm } from '@/types/sanity'
import { GlossaryList } from './GlossaryList'
import { GlossarySearch } from './GlossarySearch'
import { FeaturedTerm } from './FeaturedTerm'

interface GlossaryManagerProps {
    terms: GlossaryTerm[]
}

export function GlossaryManager({ terms }: GlossaryManagerProps) {
    const [searchQuery, setSearchQuery] = useState('')

    const filteredTerms = useMemo(() => {
        if (!searchQuery) return terms
        const query = searchQuery.toLowerCase()
        return terms.filter(
            (item) =>
                item.term.toLowerCase().includes(query) ||
                item.definition.toLowerCase().includes(query)
        )
    }, [searchQuery, terms])

    // Find a featured term (e.g., "Maillard Reaction" or just the first one)
    // Ideally, this could be passed from the parent or determined by a field in Sanity
    const featuredTerm = useMemo(() => {
        return terms.find(t => t.term === 'Maillard Reaction') || terms[0]
    }, [terms])

    return (
        <div className="space-y-10">
            {/* Featured Term */}
            {!searchQuery && featuredTerm && (
                <FeaturedTerm term={featuredTerm.term} definition={featuredTerm.definition} />
            )}

            {/* Search */}
            <GlossarySearch onSearch={setSearchQuery} />

            {/* Terms List */}
            <GlossaryList terms={filteredTerms} searchQuery={searchQuery} />
        </div>
    )
}
