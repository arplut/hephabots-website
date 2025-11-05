import { DollarSign, Map, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Unplanned Downtime",
    description: "Unexpected equipment failures halt production and can lead to millions in losses per hour."
  },
  {
    icon: AlertCircle,
    title: "Yield Loss",
    description: "Microscopic contaminants cause batch failures and significant yield degradation in precision manufacturing."
  },
  {
    icon: Map,
    title: "Inefficient Maintenance",
    description: "Manual checks, reactive workloads and labour strain reduce productivity and stretch operational resources."
  }
];


export const Problem = () => {
  return (
    <section className="relative z-10 py-24 px-6 bg-white/30">
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
