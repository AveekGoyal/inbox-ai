import { cn } from "@/lib/utils"
import Link from "next/link"

export interface TestimonialAuthor {
  name: string
  role: string
  company?: {
    name: string
  }
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? Link : 'div'

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "group relative flex w-[360px] shrink-0 flex-col justify-between",
        "rounded-2xl border border-white/10 bg-white/5 p-8",
        "transition duration-300",
        "hover:border-white/20 hover:bg-white/10",
        "backdrop-blur-lg",
        className
      )}
    >
      <div className="flex flex-col gap-6">
        <p className="text-lg text-white/80 leading-relaxed">
          {text}
        </p>
        
        <div className="flex flex-col">
          <p className="font-medium text-white">
            {author.name}
          </p>
          <div className="flex items-center justify-center gap-1 text-sm text-white/60">
            <p>{author.role}</p>
            {author.company && (
              <>
                <span>·</span>
                <p>{author.company.name}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}