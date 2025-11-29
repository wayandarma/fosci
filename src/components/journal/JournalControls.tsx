'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Category } from '@/types/sanity'

interface JournalControlsProps {
  categories: Category[]
}

export function JournalControls({ categories }: JournalControlsProps) {
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

      // Reset page when filter changes
      newSearchParams.delete('page')

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
        <Button
          variant={!currentCategory ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleCategoryChange('')}
          className="rounded-full"
        >
          All
        </Button>
        {categories?.map((category) => {
          const slug = category.slug?.current || category.title.toLowerCase().replace(/\s+/g, '-')
          const isActive = slug === currentCategory

          return (
            <Button
              key={category._id}
              variant={isActive ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryChange(slug)}
              className="rounded-full"
            >
              {category.title}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
