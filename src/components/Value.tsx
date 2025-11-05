import { Shield, FileCheck, Eye } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "AI Contamination Alerts",
    description: "Support preventive maintenance with early detection and alerts on potential issues in the fab."
  },
  {
    icon: FileCheck,
    title: "Traceability and EHS Compliance",
    description: "Document environmental events or checks with evidence and timestamps."
  },
  {
    icon: Eye,
    title: "Monitor and Inspect Remotely",
    description: "Access real-time data without physical presence on the fab floor."
  }
];

export const Value = () => {
  return (
    <section className="relative z-10 py-24 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming fab operations through intelligent inspection automation
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> */}
        <div className="grid md:grid-cols-3 gap-8 lg:grid-cols-3 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-block bg-gradient-accent rounded-xl p-10 shadow-[0_20px_25px_-5px_hsl(215_25%_20%_/_0.15)]">
            <p className="text-xl md:text-2xl font-semibold text-primary-foreground leading-relaxed">
              Avoid costly shutdowns or yield losses that can result in losses ranging from $100K-$1M+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};