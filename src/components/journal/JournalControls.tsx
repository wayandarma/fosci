'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const categories = [
  { id: 'all', label: 'All', slug: '' },
  { id: 'myth-busting', label: 'Myth Busting', slug: 'myth-busting' },
  { id: 'ingredients', label: 'Ingredients', slug: 'ingredients' },
  { id: 'nutrition', label: 'Nutrition', slug: 'nutrition' },
]

export function JournalControls() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const currentQuery = searchParams.get('q') ?? ''
  const currentCategory = searchParams.get('category') ?? ''

  const [searchValue, setSearchValue] = useState(currentQuery)

  // Sync search value with URL param on mount/change
  useEffect(() => {
    setSearchValue(currentQuery)
  }, [currentQuery])

  // Create URL with updated params
  const createQueryString = useCallback(
    (params: Record<string, string | null>) => {
      const newSearchParams = new URLSearchParams(searchParams.toString())
      
      Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === '') {
          newSearchParams.delete(key)
        } else {
          newSearchParams.set(key, value)
        }
      })

      return newSearchParams.toString()
    },
    [searchParams]
  )

  // Debounced search handler
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue !== currentQuery) {
        const queryString = createQueryString({ q: searchValue || null })
        router.push(`${pathname}${queryString ? `?${queryString}` : ''}`, { scroll: false })
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [searchValue, currentQuery, createQueryString, pathname, router])

  // Category filter handler
  const handleCategoryChange = (slug: string) => {
    const queryString = createQueryString({ category: slug || null })
    router.push(`${pathname}${queryString ? `?${queryString}` : ''}`, { scroll: false })
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search articles..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="h-12 pl-12 text-base"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isActive = category.slug === currentCategory || 
            (category.slug === '' && !currentCategory)
          
          return (
            <Button
              key={category.id}
              variant={isActive ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryChange(category.slug)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
