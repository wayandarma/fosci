'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function AboutHero() {
  return (
    <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left - Portrait */}
        <motion.div
          className="relative mx-auto w-full max-w-md lg:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInLeft}
        >
          <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondary to-accent/20">
            {/* Placeholder for professional portrait */}
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 size-32 rounded-full bg-primary/10" />
                <p className="text-sm text-muted-foreground">Professional Portrait</p>
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 -z-10 size-full rounded-2xl border-2 border-primary/20" />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          className="flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <p className="mb-4 font-serif text-lg italic text-muted-foreground">
            The Scientist Behind the Science
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="font-serif italic font-normal">I Kadek</span>{' '}
            <span className="text-primary">Adi Indrawan</span>
          </h1>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground">
            <p className="text-xl leading-relaxed">
              <span className="font-semibold text-foreground">Hi, I&apos;m I Kadek Adi Indrawan.</span>{' '}
              I bridge the gap between{' '}
              <span className="font-serif italic">complex biochemistry</span>{' '}
              and your daily lunch.
            </p>
            <p className="leading-relaxed">
              While social media loves to{' '}
              <span className="font-semibold">fear-monger</span> about ingredients,{' '}
              I prefer to look at the <span className="font-serif italic">data</span>.
            </p>
            <p className="leading-relaxed">
              No sponsored agendas. No miracle cures. Just{' '}
              <span className="font-semibold text-primary">evidence-based insights</span>{' '}
              delivered in a way that actually makes sense.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
