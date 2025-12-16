import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919164060961";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'm interested in booking a Sikkim tour with Pradhan's Homestay."
);

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
      
      {/* Pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
};

export default FloatingWhatsApp;
