'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Atom, FlaskConical, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
  },
}

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Content */}
          <motion.div
            className="flex flex-col"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
              variants={fadeInUp}
            >
              The Science Behind{' '}
              <span className="text-primary">Your Food</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-lg text-lg text-muted-foreground md:text-xl"
              variants={fadeInUp}
            >
              Debunking myths and exploring the chemistry of flavor.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              variants={fadeInUp}
            >
              <Button asChild size="lg">
                <Link href="/journal">Read Latest Insights</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">About FoodSci</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Placeholder */}
          <motion.div
            className="relative flex items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <div className="relative aspect-square w-full max-w-md">
              {/* Abstract molecular/scientific illustration placeholder */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
              <div className="absolute inset-4 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm" />
              
              {/* Floating icons representing science */}
              <motion.div
                className="absolute top-8 right-8 flex size-16 items-center justify-center rounded-2xl bg-primary/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Atom className="size-8 text-primary" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-12 left-8 flex size-14 items-center justify-center rounded-xl bg-accent/20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <FlaskConical className="size-7 text-primary" />
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/5 ring-1 ring-primary/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Leaf className="size-10 text-primary" />
              </motion.div>

              {/* Decorative dots/molecules */}
              <div className="absolute top-1/4 right-1/4 size-3 rounded-full bg-accent/60" />
              <div className="absolute bottom-1/3 right-1/3 size-2 rounded-full bg-primary/40" />
              <div className="absolute top-1/3 left-1/4 size-2.5 rounded-full bg-primary/30" />
            </div>
          </motion.div>
        </div>
      </div>


      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-accent/10 blur-3xl" />
    </section>
  )
}
