'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export function Philosophy() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            <span className="font-serif italic font-normal">The</span> Philosophy
          </h2>

          {/* Blockquote */}
          <motion.blockquote
            className="relative mb-12 border-l-4 border-primary bg-primary/5 py-8 pl-8 pr-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Quote className="absolute -top-4 left-4 size-8 text-primary/30" />
            <p className="text-2xl leading-relaxed text-foreground md:text-3xl">
              <span className="font-serif italic">Chemicals are not enemies.</span>{' '}
              <span className="font-semibold">Water is a chemical. Air is a chemical.</span>
            </p>
            <p className="mt-4 text-xl text-primary md:text-2xl">
              Understanding food science is the key to{' '}
              <span className="font-semibold">food freedom.</span>
            </p>
          </motion.blockquote>

          {/* Philosophy Text */}
          <motion.div
            className="space-y-6 text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p>
              We live in an age of <span className="font-semibold text-foreground">information overload</span>. 
              Every day, a new study claims something will either kill you or save your life. 
              Social media amplifies fear, and marketing exploits confusion.
            </p>
            <p>
              The result? People are more{' '}
              <span className="font-serif italic">anxious about food</span> than ever before.
            </p>
            <p>
              I believe that understanding the science behind what we eat is{' '}
              <span className="font-semibold text-foreground">empowering</span>, not frightening. 
              When you know how your body processes different nutrients, how cooking transforms 
              ingredients, and how to evaluate health claims critically—food becomes a source 
              of <span className="font-serif italic">joy</span>, not stress.
            </p>
            <p>
              My approach is rooted in <span className="font-semibold">peer-reviewed research</span>, 
              not trends. I read the studies so you don&apos;t have to, and I translate 
              complex findings into practical, actionable insights.
            </p>
            <p className="text-xl font-medium text-foreground">
              <span className="font-serif italic">Science isn&apos;t about absolutes</span>—it&apos;s 
              about evidence-based understanding.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
