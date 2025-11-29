'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Post } from '@/types/sanity'

interface FeaturedGridProps {
  posts: Post[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
}

export function FeaturedGrid({ posts }: FeaturedGridProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Trending Myths</h2>
          <p className="mt-3 text-muted-foreground">
            Separating food facts from fiction
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {posts.map((post, index) => {
            const category = post.categories?.[0]

            return (
              <motion.div
                key={post._id}
                variants={itemVariants}
                className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              >
                <Link href={`/journal/${post.slug.current}`}>
                  <Card className={`group h-full transition-shadow hover:shadow-lg ${index === 0 ? 'flex flex-col justify-between' : ''}`}>
                    <CardHeader>
                      <div className="mb-2">
                        {category && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {category.title}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className={`transition-colors group-hover:text-primary ${index === 0 ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={`text-muted-foreground ${index === 0 ? 'text-base' : 'text-sm line-clamp-3'}`}>
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
