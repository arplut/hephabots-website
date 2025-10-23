import { DollarSign, Map, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Sky-High Costs",
    description: "Traditional inspection methods drain budgets with labor-intensive processes and equipment downtime."
  },
  {
    icon: Map,
    title: "Inaccessible Areas",
    description: "Critical infrastructure in confined spaces or hazardous zones remains uninspected and vulnerable."
  },
  {
    icon: AlertCircle,
    title: "Inconsistent Monitoring",
    description: "Manual inspections lead to gaps in coverage, missed defects, and unpredictable quality."
  }
];

export const Problem = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Inspection Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industrial facilities face mounting pressure to maintain quality while controlling costs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-border rounded-xl p-8 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-accent flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
