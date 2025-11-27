'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type MythStatus = 'myth' | 'fact' | 'debunked'

interface MythCard {
  id: string
  title: string
  excerpt: string
  status: MythStatus
  slug: string
}

const dummyMyths: MythCard[] = [
  {
    id: '1',
    title: 'Eating carrots improves night vision',
    excerpt: 'While carrots contain vitamin A essential for eye health, they won\'t give you superhuman night vision. This myth originated from WWII propaganda.',
    status: 'debunked',
    slug: 'carrots-night-vision',
  },
  {
    id: '2',
    title: 'Microwaving food destroys nutrients',
    excerpt: 'Microwaving is actually one of the best cooking methods for preserving nutrients due to shorter cooking times and minimal water use.',
    status: 'myth',
    slug: 'microwave-nutrients',
  },
  {
    id: '3',
    title: 'Honey never spoils',
    excerpt: 'Archaeologists have found 3,000-year-old honey in Egyptian tombs that was still perfectly edible. Its low moisture and acidic pH prevent bacterial growth.',
    status: 'fact',
    slug: 'honey-never-spoils',
  },
  {
    id: '4',
    title: 'MSG is harmful to your health',
    excerpt: 'Decades of research have shown that MSG is safe for consumption. The "Chinese Restaurant Syndrome" has been thoroughly debunked by science.',
    status: 'debunked',
    slug: 'msg-harmful',
  },
]

const statusConfig: Record<MythStatus, { label: string; className: string }> = {
  myth: {
    label: 'Myth',
    className: 'bg-destructive/10 text-destructive hover:bg-destructive/20',
  },
  fact: {
    label: 'Fact',
    className: 'bg-primary/10 text-primary hover:bg-primary/20',
  },
  debunked: {
    label: 'Debunked',
    className: 'bg-accent/20 text-accent-foreground hover:bg-accent/30',
  },
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

export function FeaturedGrid() {
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
          {dummyMyths.map((myth, index) => (
            <motion.div
              key={myth.id}
              variants={itemVariants}
              className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <Link href={`/journal/${myth.slug}`}>
                <Card className={`group h-full transition-shadow hover:shadow-lg ${index === 0 ? 'flex flex-col justify-between' : ''}`}>
                  <CardHeader>
                    <div className="mb-2">
                      <Badge className={statusConfig[myth.status].className}>
                        {statusConfig[myth.status].label}
                      </Badge>
                    </div>
                    <CardTitle className={`transition-colors group-hover:text-primary ${index === 0 ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                      {myth.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-muted-foreground ${index === 0 ? 'text-base' : 'text-sm line-clamp-3'}`}>
                      {myth.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
