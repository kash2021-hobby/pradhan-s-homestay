import { Car, Users, Shield, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919164060961";

const vehicles = [
  { name: "Bolero", capacity: "7 Seater", type: "SUV", ideal: "Hill terrain" },
  { name: "Bolero Neo Plus", capacity: "7 Seater", type: "SUV", ideal: "Family trips" },
  { name: "Sumo", capacity: "7-10 Seater", type: "SUV", ideal: "Group travel" },
  { name: "Ertiga", capacity: "7 Seater", type: "MUV", ideal: "Comfort rides" },
  { name: "Innova", capacity: "7 Seater", type: "MUV", ideal: "Premium travel" },
  { name: "Scorpio N", capacity: "7 Seater", type: "SUV", ideal: "Adventure trips" },
  { name: "WagonR", capacity: "4 Seater", type: "Hatchback", ideal: "Budget trips" },
];

const features = [
  { icon: Shield, title: "Experienced Drivers", desc: "Local drivers with expert hill knowledge" },
  { icon: Car, title: "Well-Maintained", desc: "Regularly serviced for mountain roads" },
  { icon: Users, title: "Flexible Options", desc: "Choose as per your group size" },
];

const VehicleFleet = () => {
  const handleBookingClick = (vehicleName: string) => {
    const message = encodeURIComponent(
      `Hi! I'd like to book a ${vehicleName} for my Sikkim trip. Please share rates and availability.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleGeneralEnquiry = () => {
    const message = encodeURIComponent(
      `Hi! I'm looking to book a private car for my Sikkim trip. Can you help me choose the right vehicle?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="vehicles" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
            Private Car Booking
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Vehicle Fleet
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of well-maintained vehicles perfect for hill travel. 
            All come with experienced local drivers who know every turn of Sikkim roads.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div key={feature.title} className="bg-secondary/50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {vehicles.map((vehicle) => (
            <button
              key={vehicle.name}
              onClick={() => handleBookingClick(vehicle.name)}
              className="group bg-card border border-border rounded-xl p-4 md:p-6 text-left hover:border-accent hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <Car className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1">
                {vehicle.name}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm">{vehicle.capacity}</p>
              <span className="inline-block mt-2 text-xs text-valley-green bg-valley-green/10 px-2 py-1 rounded-full">
                {vehicle.ideal}
              </span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button onClick={handleGeneralEnquiry} className="btn-whatsapp inline-flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Get Vehicle Rates on WhatsApp
          </button>
          <p className="text-muted-foreground text-sm mt-3">
            Special rates for multi-day bookings
          </p>
        </div>
      </div>
    </section>
  );
};

export default VehicleFleet;
