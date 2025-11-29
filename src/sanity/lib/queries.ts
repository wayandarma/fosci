import { groq } from 'next-sanity'

// Posts queries
export const getPostsQuery = groq`
  *[_type == "post" && 
    ($categorySlug == null || $categorySlug in categories[]->slug.current) &&
    ($keyword == null || title match $keyword + "*" || excerpt match $keyword + "*")
  ] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    "categories": categories[]->{ _id, title, "slug": slug.current }
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
    "categories": categories[]->{ _id, title, "slug": slug.current },
    "author": author->{ name, image, bio }
  }
`

export const getPostsCountQuery = groq`
  count(*[_type == "post" && 
    ($categorySlug == null || $categorySlug in categories[]->slug.current) &&
    ($keyword == null || title match $keyword + "*" || excerpt match $keyword + "*")
  ])
`

// Categories queries
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    description,
    slug
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
