import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ApplicationsSection />
    <LocationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
