import { useState, useEffect } from "react";
import { Menu, X, Mountain, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919164060961";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'm interested in Pradhan's Homestay services.");

const navLinks = [
  { name: "Packages", href: "#packages" },
  { name: "Vehicles", href: "#vehicles" },
  { name: "Reviews", href: "#reviews" },
  { name: "Enquire", href: "#enquiry" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Mountain className={`w-7 h-7 ${isScrolled ? "text-primary" : "text-accent"}`} />
            <span className={`font-display text-lg md:text-xl font-bold ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              Pradhan's Homestay
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-whatsapp text-sm py-2 px-4"
            >
              <MessageCircle className="w-4 h-4 mr-1 inline" />
              WhatsApp
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-elevated animate-slide-up">
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-whatsapp text-center mt-2"
              >
                <MessageCircle className="w-4 h-4 mr-2 inline" />
                Book on WhatsApp
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
