import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";

export function Features() {
  return (
    <section id="features" className="py-24 bg-[#030303]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="max-w-[720px] mx-auto text-3xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            Intelligent Email Management
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-xl">
            Stay focused and organized with our AI-powered email assistant that adapts to your workflow
          </p>
        </div>
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
}
