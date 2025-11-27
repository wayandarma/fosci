'use client'

import { motion } from 'framer-motion'
import { Mic, Briefcase, Handshake } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Mic,
    title: 'Speaking',
    description: 'Engaging talks for conferences, universities, and corporate events on food science, nutrition myths, and evidence-based eating.',
    cta: 'Book a Talk',
  },
  {
    icon: Briefcase,
    title: 'Consulting',
    description: 'Expert guidance for food brands, health platforms, and media outlets on nutritional accuracy and science communication.',
    cta: 'Start a Project',
  },
  {
    icon: Handshake,
    title: 'Brand Partnership',
    description: 'Collaborate on content that educates and engages. I only partner with brands that align with evidence-based practices.',
    cta: 'Partner With Me',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Services() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="font-serif italic font-normal">Let&apos;s</span> Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">Got a burning question or a project?</span>{' '}
            <span className="font-serif italic">Let&apos;s brew some ideas.</span>
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="size-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="flex-1 text-muted-foreground">
                    {service.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
