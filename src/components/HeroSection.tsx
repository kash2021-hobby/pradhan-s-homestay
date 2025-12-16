import { useState, useEffect } from "react";
import { MessageCircle, MapPin, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-sikkim.jpg";
import { useCountUp } from "@/hooks/useCountUp";

const WHATSAPP_NUMBER = "919164060961";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in booking a Sikkim tour with Pradhan's Homestay. Please share more details."
);

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  // Count-up animations with staggered delays
  const travelers = useCountUp({ end: 500, duration: 2000, delay: 1200, suffix: '+' });
  const rating = useCountUp({ end: 4.9, duration: 1800, delay: 1400, decimals: 1 });
  const years = useCountUp({ end: 5, duration: 1500, delay: 1600, suffix: '+' });

  // Parallax effect - background moves slower than scroll
  const parallaxOffset = scrollY * 0.4;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-primary-foreground/90 text-sm font-medium">NJP Pickup & Drop Available</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-bold mb-4 md:mb-6 leading-tight">
          {/* Mobile: 3 lines */}
          <span className="block sm:hidden opacity-0 animate-[fadeInUp_0.7s_ease-out_0.2s_forwards]">Experience the</span>
          <span className="block sm:hidden opacity-0 animate-[fadeInUp_0.7s_ease-out_0.35s_forwards]">Magic of</span>
          {/* Tablet & Desktop: 2 lines */}
          <span className="hidden sm:block opacity-0 animate-[fadeInUp_0.7s_ease-out_0.2s_forwards]">Experience the Magic of</span>
          <span className="block text-accent mt-1 md:mt-2 opacity-0 animate-[fadeInUp_0.7s_ease-out_0.5s_forwards]">Sikkim</span>
        </h1>

        {/* Subheading */}
        <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 md:mb-8 px-2 font-body leading-relaxed opacity-0 animate-[fadeInUp_0.6s_ease-out_0.65s_forwards]">
          Curated homestay experiences & scenic tours through the Himalayan paradise. 
          Local expertise, comfort & unforgettable memories await you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-whatsapp flex items-center gap-2 text-lg opacity-0 animate-[fadeInUp_0.5s_ease-out_0.85s_forwards]"
          >
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </button>
          <button 
            onClick={scrollToPackages}
            className="btn-secondary bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground opacity-0 animate-[fadeInUp_0.5s_ease-out_0.95s_forwards]"
          >
            Explore Packages
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12">
          <div className="text-center opacity-0 animate-[fadeInUp_0.5s_ease-out_1.1s_forwards]">
            <p className="text-3xl md:text-4xl font-display font-bold text-accent">{travelers.value}</p>
            <p className="text-primary-foreground/70 text-sm">Happy Travelers</p>
          </div>
          <div className="text-center opacity-0 animate-[fadeInUp_0.5s_ease-out_1.25s_forwards]">
            <p className="text-3xl md:text-4xl font-display font-bold text-accent">{rating.value}★</p>
            <p className="text-primary-foreground/70 text-sm">Google Rating</p>
          </div>
          <div className="text-center opacity-0 animate-[fadeInUp_0.5s_ease-out_1.4s_forwards]">
            <p className="text-3xl md:text-4xl font-display font-bold text-accent">{years.value}</p>
            <p className="text-primary-foreground/70 text-sm">Years Experience</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToPackages}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors opacity-0 animate-[fadeInUp_0.5s_ease-out_1.6s_forwards,bounce_2s_ease-in-out_2.1s_infinite]"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
