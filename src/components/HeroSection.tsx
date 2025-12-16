import { MessageCircle, MapPin, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-sikkim.jpg";

const WHATSAPP_NUMBER = "919164060961";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in booking a Sikkim tour with Pradhan's Homestay. Please share more details."
);

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-primary-foreground/90 text-sm font-medium">NJP Pickup & Drop Available</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-primary-foreground font-bold mb-6 animate-fade-up delay-100 leading-tight">
          Experience the Magic of
          <span className="block text-accent mt-2">Sikkim</span>
        </h1>

        {/* Subheading */}
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up delay-200 font-body">
          Curated homestay experiences & scenic tours through the Himalayan paradise. 
          Local expertise, comfort & unforgettable memories await you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-300">
          <button 
            onClick={() => document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-whatsapp flex items-center gap-2 text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </button>
          <button 
            onClick={scrollToPackages}
            className="btn-secondary bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
          >
            Explore Packages
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 animate-fade-up delay-400">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-accent">500+</p>
            <p className="text-primary-foreground/70 text-sm">Happy Travelers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-accent">4.9★</p>
            <p className="text-primary-foreground/70 text-sm">Google Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-accent">5+</p>
            <p className="text-primary-foreground/70 text-sm">Years Experience</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToPackages}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
