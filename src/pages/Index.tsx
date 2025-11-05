import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Value } from "@/components/Value";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Value />
      <EarlyAccess />
      <Footer />
    </div>
  );
};

export default Index;
