import { AboutHero } from '@/components/about/AboutHero'
import { Credentials } from '@/components/about/Credentials'
import { Philosophy } from '@/components/about/Philosophy'
import { Services } from '@/components/about/Services'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Credentials />
      <Philosophy />
      <Services />
    </>
  )
}
