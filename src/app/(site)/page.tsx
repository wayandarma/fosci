import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedGrid } from '@/components/home/FeaturedGrid'
import { client } from '@/sanity/lib/client'
import { featuredPostsQuery } from '@/sanity/lib/queries'
import { Post } from '@/types/sanity'

export const revalidate = 60 // Revalidate every minute

export default async function Home() {
  const featuredPosts = await client.fetch<Post[]>(featuredPostsQuery)

  return (
    <>
      <HeroSection />
      <FeaturedGrid posts={featuredPosts} />
    </>
  )
}
