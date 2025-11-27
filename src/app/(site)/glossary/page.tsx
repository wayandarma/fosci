import { GlossaryList } from '@/components/glossary/GlossaryList'

export default function GlossaryPage() {
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
        <GlossaryList />
      </div>
    </div>
  )
}
