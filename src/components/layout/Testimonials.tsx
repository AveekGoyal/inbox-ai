import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

export function Testimonials() {
  const testimonials = [
    {
      author: {
        name: "Sarah Chen",
        role: "Product Manager",
        avatar: "/testimonials/avatar1.jpg",
        company: {
          name: "TechCorp",
          logo: "/testimonials/company1.svg"
        }
      },
      text: "This email assistant has transformed how I manage my inbox. The time-based summaries help me stay focused and never miss important messages."
    },
    {
      author: {
        name: "Michael Rodriguez",
        role: "Startup Founder",
        avatar: "/testimonials/avatar2.jpg",
        company: {
          name: "InnovateLabs",
          logo: "/testimonials/company2.svg"
        }
      },
      text: "The AI-powered urgency detection is incredibly accurate. It helps me prioritize effectively and ensures I never miss critical emails."
    },
    {
      author: {
        name: "Emily Watson",
        role: "Marketing Director",
        avatar: "/testimonials/avatar3.jpg",
        company: {
          name: "GrowthCo",
          logo: "/testimonials/company3.svg"
        }
      },
      text: "The natural language search is a game-changer. Finding old emails is now as simple as asking a question in plain English."
    },
    {
      author: {
        name: "David Park",
        role: "Software Engineer",
        avatar: "/testimonials/avatar4.jpg",
        company: {
          name: "CodeWorks",
          logo: "/testimonials/company4.svg"
        }
      },
      text: "The follow-up reminders and memory system ensure nothing falls through the cracks. It's like having a personal email assistant."
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-[#030303]">
      <TestimonialsSection
        title="What Our Users Say"
        description="Join thousands of professionals who have transformed their email workflow with our AI assistant"
        testimonials={testimonials}
      />
    </section>
  )
}
