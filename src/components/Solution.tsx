import { Brain, Move, Zap } from "lucide-react";

const innovations = [
  {
    icon: Brain,
    title: "AI-Driven Autonomy",
    description: "Intelligent navigation and real-time decision-making without human intervention."
  },
  {
    icon: Move,
    title: "Flexible Robotics",
    description: "Advanced manipulators reach tight spaces and adapt to complex environments."
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Continuous monitoring with instant alerts and actionable insights."
  }
];

export const Solution = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge robotics meets artificial intelligence for inspection excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {innovation.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {innovation.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
