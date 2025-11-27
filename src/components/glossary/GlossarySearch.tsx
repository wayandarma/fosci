'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface GlossarySearchProps {
  onSearch: (query: string) => void
}

export function GlossarySearch({ onSearch }: GlossarySearchProps) {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search terms..."
        value={query}
        onChange={handleChange}
        className="h-14 pl-12 text-lg"
      />
    </div>
  )
}
