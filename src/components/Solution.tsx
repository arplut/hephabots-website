import { Brain, Move, Layers } from "lucide-react";

const innovations = [
  {
    icon: Move,
    title: "Compact & Versatile",
    description: "A small, agile form factor enables precise positioning and access to diverse perspectives"
  },
  {
    icon: Layers,
    title: "Modular & Custom Sensors",
    description: "Interchangeable sensor modules tailored for custom inspection needs and rapid reconfiguration."
  },
  {
    icon: Brain,
    title: "Efficient & Intelligent Sensing",
    description: "AI-enhanced sensing optimises data collection, delivering accurate insights with minimal overhead."
  }
];


export const Solution = () => {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compact, intelligent robots that can provide inspection from any viewpoint (angle, position and height) for custom and precise monitoring.
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
