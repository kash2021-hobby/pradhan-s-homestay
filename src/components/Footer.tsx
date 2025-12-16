import { MapPin, Phone, Mail, ExternalLink, Mountain } from "lucide-react";

const GOOGLE_REVIEW_LINK = "https://share.google/f7F5RTOiEezKZ9sSo";
const WHATSAPP_NUMBER = "919876543210";

const Footer = () => {
  return (
    <footer className="bg-forest-deep text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-accent" />
              <h3 className="font-display text-2xl font-bold">Pradhan's Homestay</h3>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Your trusted local partner for authentic Sikkim experiences. 
              From scenic tours to comfortable homestays, we make your Himalayan 
              dreams come true.
            </p>
            <div className="flex gap-4">
              <a 
                href={GOOGLE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Google Business Profile"
              >
                <img 
                  src="https://www.google.com/favicon.ico" 
                  alt="Google" 
                  className="w-5 h-5"
                />
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#packages" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="#vehicles" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Car Booking
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#enquiry" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a 
                  href={GOOGLE_REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  Google Profile
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Sikkim, India<br />
                  NJP Pickup Available
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:contact@pradhanshomestay.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  contact@pradhanshomestay.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Pradhan's Homestay. All rights reserved. Made with ❤️ in Sikkim
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
