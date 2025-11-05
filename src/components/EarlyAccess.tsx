import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          email: email,
          company: company || "",
          subject: "Website Customer Request",
          from_name: "Hephabots Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Success! 🎉",
          description: "We've registered your interest. We'll be in touch soon!",
        });
        setEmail("");
        setCompany("");
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="early-access" className="py-24 px-6 bg-gradient-hero relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
            <Mail className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Interest Form
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            We’re seeking collaborators to pilot and refine our early solutions for smarter inspection and maintenance across industries. Express interest to access early-backer discounts.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/95 mb-2">
                  Work Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-primary-foreground/20 text-foreground placeholder:text-foreground focus:border-secondary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-primary-foreground/95 mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-background/50 border-primary-foreground/20 text-foreground placeholder:text-foreground focus:border-secondary"
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                variant="hero"
                className="w-full text-lg mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
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
