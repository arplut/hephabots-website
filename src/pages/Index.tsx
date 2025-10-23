import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <EarlyAccess />
      <Footer />
    </div>
  );
};

export default Index;
