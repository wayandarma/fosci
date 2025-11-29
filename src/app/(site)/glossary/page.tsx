import { GlossaryManager } from '@/components/glossary/GlossaryManager'
import { client } from '@/sanity/lib/client'
import { glossaryQuery } from '@/sanity/lib/queries'
import { GlossaryTerm } from '@/types/sanity'

export const revalidate = 3600 // Revalidate every hour

export default async function GlossaryPage() {
  let terms: GlossaryTerm[] = []
  let error = null

  try {
    terms = await client.fetch(glossaryQuery)
  } catch (e) {
    console.error('Failed to fetch glossary terms:', e)
    error = 'Failed to load glossary terms. Please check your connection or try again later.'
  }

  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Food Science Glossary</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your comprehensive A-Z guide to food science terminology
        </p>
      </div>

      {/* Glossary Content */}
      <div className="mx-auto max-w-3xl">
        {error ? (
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-center text-destructive">
            {error}
          </div>
        ) : (
          <GlossaryManager terms={terms} />
        )}
      </div>
    </div>
  )
}
