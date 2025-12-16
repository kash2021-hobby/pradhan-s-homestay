import { useState } from "react";
import { MessageCircle, Send, User, Phone, Calendar, Users, Package } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919164060961";

const packageOptions = [
  "East Sikkim 6-Day Tour",
  "North Sikkim 5-Day Tour",
  "Private Car Booking",
  "Custom Tour Package",
  "Just Enquiring"
];

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    travelDate: "",
    numPeople: "",
    packageInterest: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }

    // Create WhatsApp message
    const message = `
🏔️ *New Booking Enquiry - Pradhan's Homestay*

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📅 Travel Date: ${formData.travelDate || "Not specified"}
👥 Number of People: ${formData.numPeople || "Not specified"}
📦 Interested In: ${formData.packageInterest || "Not specified"}

Please share details and availability!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
    
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <section id="enquiry" className="section-padding bg-gradient-mist">
      <div className="container mx-auto max-w-2xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
            Start Your Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Plan Your Sikkim Trip
          </h2>
          <p className="text-muted-foreground">
            Fill in your details and we'll get back to you on WhatsApp with personalized recommendations
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full pl-11 pr-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 91640 60961"
                  className="w-full pl-11 pr-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Travel Date & Number of People */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="travelDate" className="block text-sm font-medium text-foreground mb-2">
                  Travel Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="numPeople" className="block text-sm font-medium text-foreground mb-2">
                  People
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="number"
                    id="numPeople"
                    name="numPeople"
                    value={formData.numPeople}
                    onChange={handleChange}
                    placeholder="2"
                    min="1"
                    max="20"
                    className="w-full pl-11 pr-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Package Interest */}
            <div>
              <label htmlFor="packageInterest" className="block text-sm font-medium text-foreground mb-2">
                Interested In
              </label>
              <div className="relative">
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  id="packageInterest"
                  name="packageInterest"
                  value={formData.packageInterest}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select a package</option>
                  {packageOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-whatsapp w-full flex items-center justify-center gap-2 text-lg py-4"
            >
              <MessageCircle className="w-5 h-5" />
              Send Enquiry via WhatsApp
              <Send className="w-4 h-4" />
            </button>
          </div>

          <p className="text-muted-foreground text-xs text-center mt-4">
            By submitting, you'll be redirected to WhatsApp to complete your enquiry
          </p>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
