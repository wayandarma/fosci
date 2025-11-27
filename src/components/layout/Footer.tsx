import Link from 'next/link'
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const socialLinks = [
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Youtube, label: 'YouTube' },
]

const footerLinks = [
  { href: '/journal', label: 'The Journal' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/about', label: 'About' },
  { href: '/privacy', label: 'Privacy' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo & Motto */}
          <div className="space-y-2">
            <Link href="/" className="font-serif text-2xl font-bold text-primary">
              FoodSci
            </Link>
            <p className="text-sm text-muted-foreground italic">
              Bridging Science and Lifestyle
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>

          <Separator className="w-full max-w-xs" />

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} FoodSci Authority Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
