import { useState } from "react";
import { Home, Utensils, Coffee, Bed, Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import balconyView from "@/assets/homestay/balcony-view.jpg";
import room1 from "@/assets/homestay/room-1.jpg";
import room2 from "@/assets/homestay/room-2.jpg";
import outdoorDining from "@/assets/homestay/outdoor-dining.jpg";
import flowerStairs from "@/assets/homestay/flower-stairs.jpg";
import guests from "@/assets/homestay/guests.jpg";
import roomFeatured from "@/assets/homestay/room-featured.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goToPrevious = () => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + homestayImages.length) % homestayImages.length : null));
  const goToNext = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % homestayImages.length : null));
  return (
    <section className="py-16 md:py-20 bg-secondary/30 overflow-hidden">
      <div ref={sectionRef} className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
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

        {/* Pricing & Inclusions Card - Enhanced */}
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-700 delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-500">
            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={roomFeatured}
                  alt="Comfortable homestay room with mountain views"
                  className={`w-full h-full object-cover transition-transform duration-1000 ${
                    isVisible ? "scale-100" : "scale-110"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-gradient-to-r" />
                <div className={`absolute bottom-4 left-4 md:bottom-6 md:left-6 transition-all duration-500 delay-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}>
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    Best Value
                  </span>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className={`mb-6 transition-all duration-500 delay-300 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Homestay Packages
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-accent">₹1000</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    with AT Plan (Accommodation & Tariff)
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  {inclusions.map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-3 transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                      }`}
                      style={{ transitionDelay: isVisible ? `${400 + index * 100}ms` : "0ms" }}
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className={`pt-4 border-t border-border/50 transition-all duration-500 delay-700 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Authentic Sikkimese hospitality</span> — 
                    Experience local culture with modern comfort
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {homestayImages.map((image, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2 md:col-span-1 md:row-span-2" : ""
              } transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ minHeight: index === 0 ? "280px" : "140px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className={`mt-10 text-center transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Complete package experience</span> — 
            We handle everything from accommodation to sightseeing, so you can focus on making memories.
          </p>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black/95 border-none">
          {selectedIndex !== null && (
            <div className="relative">
              <img
                src={homestayImages[selectedIndex].src}
                alt={homestayImages[selectedIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-center font-medium">{homestayImages[selectedIndex].alt}</p>
                <p className="text-white/60 text-center text-sm mt-1">
                  {selectedIndex + 1} / {homestayImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HomestayExperience;
