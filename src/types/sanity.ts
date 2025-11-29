import type { Image, PortableTextBlock } from 'sanity'

export interface Category {
  _id: string
  title: string
  description?: string
  slug?: { current: string }
}

export interface Author {
  _id: string
  name: string
  image?: Image
  bio?: string
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: Image
  excerpt?: string
  body?: PortableTextBlock[]
  scientificVerdict?: string
  publishedAt?: string
  categories?: Category[]
  author?: Author
  featured?: boolean
}

export interface GlossaryTerm {
  _id: string
  term: string
  definition: string
  slug: { current: string }
}
