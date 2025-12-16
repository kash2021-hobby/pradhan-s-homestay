import { Home, Utensils, Car, MapPin, Coffee, Bed } from "lucide-react";
import balconyView from "@/assets/homestay/balcony-view.jpg";
import room1 from "@/assets/homestay/room-1.jpg";
import room2 from "@/assets/homestay/room-2.jpg";
import outdoorDining from "@/assets/homestay/outdoor-dining.jpg";
import flowerStairs from "@/assets/homestay/flower-stairs.jpg";
import guests from "@/assets/homestay/guests.jpg";

const homestayImages = [
  { src: balconyView, alt: "Scenic balcony view with mountain backdrop" },
  { src: room1, alt: "Comfortable twin bedroom" },
  { src: room2, alt: "Cozy double room accommodation" },
  { src: outdoorDining, alt: "Outdoor dining experience with guests" },
  { src: flowerStairs, alt: "Beautiful flower-lined entrance" },
  { src: guests, alt: "Happy guests at Pradhan's Homestay" },
];

const inclusions = [
  { icon: Bed, text: "Comfortable homestay accommodation" },
  { icon: Utensils, text: "3 meals daily (breakfast, lunch, dinner)" },
  { icon: Coffee, text: "Evening snacks included" },
  { icon: Home, text: "Food & lodging included" },
];

const HomestayExperience = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Home className="w-4 h-4" />
            Homestay & Complete Tour Packages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Home Away From Home
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Pradhan's Homestay offers authentic Sikkimese hospitality with complete package tours — 
            accommodation, food, transportation, and sightseeing, all bundled for a hassle-free experience.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12">
          {homestayImages.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 ? "col-span-2 row-span-2 md:col-span-1 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: index === 0 ? "280px" : "140px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Pricing & Inclusions Card */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Homestay Packages</h3>
                <p className="text-accent font-semibold text-lg">Starting from ₹1000 per person</p>
                <span className="text-sm text-muted-foreground">with AT Plan (Accommodation & Tariff)</span>
              </div>
            </div>
            
            <div className="space-y-3">
              {inclusions.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transportation Card */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Car className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Whole Sikkim Transportation</h3>
                <p className="text-muted-foreground">Comfortable hill-friendly vehicles</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["Bolero", "Bolero Neo Plus", "Sumo", "Ertiga", "Innova", "Scorpio N", "WagonR"].map((vehicle) => (
                <span 
                  key={vehicle}
                  className="px-3 py-1.5 bg-secondary rounded-full text-sm text-foreground"
                >
                  {vehicle}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>NJP Station pickup & drop available for all tours</span>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Complete package experience</span> — 
            We handle everything from accommodation to sightseeing, so you can focus on making memories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomestayExperience;
