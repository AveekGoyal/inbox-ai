import { Navbar } from './Navbar';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { Features } from './Features';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroGeometric 
          badge="AI Email Assistant"
          title1="Your Inbox,"
          title2="Organized by Time"
        />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
