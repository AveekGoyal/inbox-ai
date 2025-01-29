import Image from 'next/image';

const testimonials = [
  {
    quote: "The time-based email summaries have transformed my productivity. I no longer feel overwhelmed by my inbox.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "/avatars/avatar-1.jpg"
  },
  {
    quote: "The AI chatbot is incredible. I can now find specific emails instantly without endless scrolling.",
    author: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateLabs",
    image: "/avatars/avatar-2.jpg"
  },
  {
    quote: "Urgent email detection means I never miss a critical message. It's like having a personal assistant for my inbox.",
    author: "Emma Rodriguez",
    role: "Marketing Director",
    company: "CreativeFlow",
    image: "/avatars/avatar-3.jpg"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Professionals Love Our AI Email Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our AI-powered email management is helping professionals 
            stay focused and productive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="h-full rounded-2xl bg-muted/30 p-8 hover:bg-background transition-colors">
                <div className="space-y-4">
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10" />
                      {/* Placeholder for avatar - replace with actual images */}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
