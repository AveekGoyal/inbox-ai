import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Your AI Email Assistant
            </h1>
            <p className="text-xl text-muted-foreground">
              Organize your Gmail with intelligent time-based summaries, 
              urgent email detection, and a powerful AI chatbot—keeping 
              you focused without inbox overload.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="min-w-[200px]">
              Connect Gmail
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px]">
              Watch Demo
            </Button>
          </div>

          <div className="w-full max-w-5xl mt-16">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-foreground opacity-10"></div>
              {/* Replace with actual app screenshot/demo */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Email Summary & AI Chatbot Demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
