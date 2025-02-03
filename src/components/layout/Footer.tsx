import { Github, Twitter, Mail } from "lucide-react"
import { Footer as FooterComponent } from "@/components/ui/footer"

export function Footer() {
  return (
    <FooterComponent
      logo={
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white/80"
        >
          <rect width="32" height="32" rx="16" fill="currentColor" fillOpacity="0.1" />
          <path
            d="M21.657 12.343a6 6 0 0 1 0 8.485M17.828 16.172a1 1 0 0 1 0 1.414m3.829-5.657a4 4 0 0 1 0 5.657m-7.071-1.414a1 1 0 0 1 0 1.414m3.828-5.657a4 4 0 0 1 0 5.657m-7.071-1.414a1 1 0 0 1 0 1.414m3.828-5.657a4 4 0 0 1 0 5.657"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      brandName="InboxAI"
      socialLinks={[
        {
          icon: <Github className="h-6 w-6" />,
          href: "https://github.com/codeium/inbox-ai",
          label: "GitHub",
        },
        {
          icon: <Twitter className="h-6 w-6" />,
          href: "https://twitter.com/codeiumdev",
          label: "Twitter",
        },
        {
          icon: <Mail className="h-6 w-6" />,
          href: "mailto:support@codeium.com",
          label: "Email",
        },
      ]}
      mainLinks={[
        { href: "/#features", label: "Features" },
        { href: "/#testimonials", label: "Testimonials" },
        { href: "/blog", label: "Blog" },
      ]}
      legalLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
      ]}
      copyright={{
        text: " 2024 InboxAI. All rights reserved.",
        license: "Built by Codeium",
      }}
    />
  )
}
