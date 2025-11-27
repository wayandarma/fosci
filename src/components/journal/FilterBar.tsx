'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'myth-busting', label: 'Myth Busting' },
  { id: 'ingredients', label: 'Ingredients' },
  { id: 'nutrition', label: 'Nutrition' },
]

export function FilterBar() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeFilter === category.id ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveFilter(category.id)}
          className="rounded-full"
        >
          {category.label}
        </Button>
      ))}
    </div>
  )
}
