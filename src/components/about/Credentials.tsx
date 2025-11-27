'use client'

import { motion } from 'framer-motion'
import { GraduationCap, FlaskConical, BookOpen, Award } from 'lucide-react'

const stats = [
  {
    icon: FlaskConical,
    value: '5+',
    label: 'Years in R&D',
    description: 'Food industry research',
  },
  {
    icon: BookOpen,
    value: '100+',
    label: 'Myths Busted',
    description: 'Evidence-based debunking',
  },
  {
    icon: GraduationCap,
    value: 'B.Sc',
    label: 'Food Technology',
    description: 'Cornell University',
  },
  {
    icon: Award,
    value: 'M.Sc',
    label: 'Nutritional Science',
    description: 'Stanford University',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Credentials() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">The Credentials</h2>
          <p className="mt-3 text-primary-foreground/80">
            Background that informs every article
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary-foreground/10">
                <stat.icon className="size-8" />
              </div>
              <div className="text-4xl font-bold md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-lg font-semibold">{stat.label}</div>
              <div className="mt-1 text-sm text-primary-foreground/70">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
