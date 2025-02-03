import { Button } from "@/components/ui/button"
import { Github, Twitter, Mail } from "lucide-react"

interface FooterProps {
  logo: React.ReactNode
  brandName: string
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  legalLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="bg-[#030303] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/40 hover:text-white/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{link.label}</span>
              {link.icon}
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start gap-x-2 text-white/80">
            {logo}
            <span className="text-lg font-semibold">{brandName}</span>
          </div>
          <nav className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {mainLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-white/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <nav className="mt-2 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="mt-4 text-center md:text-left text-xs text-white/40">
            {copyright.text}
            {copyright.license && (
              <span className="ml-2">{copyright.license}</span>
            )}
          </p>
        </div>
      </div>
    </footer>
  )
}
