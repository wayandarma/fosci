import { groq } from 'next-sanity'

// Posts queries
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    "categories": categories[]->{ _id, title }
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    body,
    scientificVerdict,
    publishedAt,
    "categories": categories[]->{ _id, title },
    "author": author->{ name, image, bio }
  }
`

export const postsByCategoryQuery = groq`
  *[_type == "post" && $categoryId in categories[]._ref] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    "categories": categories[]->{ _id, title }
  }
`

// Categories queries
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    description
  }
`

// Glossary queries
export const glossaryQuery = groq`
  *[_type == "glossary"] | order(term asc) {
    _id,
    term,
    definition,
    slug
  }
`

export const glossaryBySlugQuery = groq`
  *[_type == "glossary" && slug.current == $slug][0] {
    _id,
    term,
    definition,
    slug
  }
`

// Author query
export const authorQuery = groq`
  *[_type == "author"][0] {
    _id,
    name,
    image,
    bio
  }
`
