import Navbar from "@/components/landing/Navbar";
import { Different, Hero, Team, WhereItWorks, Why } from "@/components/landing/Sections";
import ContactSection from "@/components/landing/ContactSection";
import Footer, { WhatsAppFloat } from "@/components/landing/Footer";

const Index = () => (
  <>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-card focus:px-4 focus:py-2"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main">
      <Hero />
      <Why />
      <Different />
      <WhereItWorks />
      <Team />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
