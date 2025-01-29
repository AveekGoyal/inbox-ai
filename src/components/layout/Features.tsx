import { Sparkles, Brain, Zap, Shield, Clock, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Time-Based Email Summaries",
    description: "Organize your inbox with morning, afternoon, and evening email digests."
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "AI-Powered Email Classification",
    description: "Automatically detect urgent, important, and normal emails using advanced NLP."
  },
  {
    icon: <MessageCircle className="w-10 h-10" />,
    title: "Intelligent Email Chatbot",
    description: "Ask natural language questions about your emails and get instant, context-aware answers."
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "One-Click Email Resolution",
    description: "Quickly mark and track emails as resolved with intelligent follow-up reminders."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Revolutionize Your Email Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leverage AI to transform how you interact with your inbox, saving time and reducing stress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg p-8 hover:bg-background transition-colors"
            >
              <div className="relative z-10 space-y-4">
                <div className="inline-block p-3 rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-foreground opacity-0 group-hover:opacity-[0.03] transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
