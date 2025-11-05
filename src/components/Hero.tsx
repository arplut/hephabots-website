import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import robotSilhouette from "@/assets/robot-silhouette.png";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate robot position and opacity based on scroll
  let progress, translateX, opacity;

  if (isMobile) {
    // Mobile: Calculate based on EarlyAccess section position
    const earlyAccessElement = document.getElementById('early-access');
    const earlyAccessTop = earlyAccessElement?.offsetTop || 2000;
    
    // Progress completes when scrolled to early access section
    progress = Math.min(scrollY / earlyAccessTop, 1);
    
    // Transform: -100% to 100% (enter from left, exit right)
    translateX = -100 + (progress * 200);
    
    // Opacity: fade in quickly, stay visible, fade out at end
    opacity = progress < 0.8 ? Math.min(progress * 2, 0.3) : Math.max(0.3 - (progress - 0.8) * 1.5, 0);
  } else {
    // Desktop: Original behavior
    const maxScroll = 2000;
    progress = Math.min(scrollY / maxScroll, 1);
    translateX = -100 + (progress * 150);
    opacity = progress < 0.7 ? Math.min(progress * 2, 0.25) : Math.max(0.25 - (progress - 0.7) * 0.8, 0);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Robot Background - Full Page */}
      <div 
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{
          transform: `translateX(${translateX}%)`,
          opacity: opacity,
          transition: 'opacity 0.1s ease-out'
        }}
      >
        <img 
          src={robotSilhouette}
          alt=""
          className={isMobile ? "h-[150vh] w-auto object-contain" : "h-[120vh] w-auto object-contain"}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Autonomous Inspection Robots
          <span className="block text-secondary mt-2">for Semiconductor Fabs</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Detect anomalies and contamination before they cause downtime or yield loss with our mobile robots built for remote monitoring and autonomous inspection in ultra-clean, high-precision environments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            variant="hero"
            onClick={scrollToForm}
            className="text-lg"
          >
            Register Your Interest
          </Button>
          
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};
