import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !company) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send to a backend/form service
    console.log({ email, company });
    
    toast({
      title: "Success! 🎉",
      description: "You're on the list. We'll be in touch soon!",
    });

    setEmail("");
    setCompany("");
  };

  return (
    <section id="early-access" className="py-24 px-6 bg-gradient-hero relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
            <Mail className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Join Early Access
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Be among the first to revolutionize your inspection process. Limited spots available.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                  Work Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-primary-foreground/20 text-foreground placeholder:text-muted-foreground focus:border-secondary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-background/50 border-primary-foreground/20 text-foreground placeholder:text-muted-foreground focus:border-secondary"
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                variant="hero"
                className="w-full text-lg mt-6"
              >
                Request Access
              </Button>
            </div>
          </div>
        </form>

        <p className="text-center text-primary-foreground/60 text-sm mt-6">
          No spam, ever. We respect your privacy.
        </p>
      </div>
    </section>
  );
};
