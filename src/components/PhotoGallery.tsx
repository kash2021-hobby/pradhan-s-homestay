import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import heroSikkim from "@/assets/hero-sikkim.jpg";
import eastSikkimLake from "@/assets/east-sikkim-lake.jpg";
import northSikkimValley from "@/assets/north-sikkim-valley.jpg";

const galleryImages = [
  {
    src: heroSikkim,
    title: "Kanchenjunga Sunrise",
    location: "Gangtok Viewpoint"
  },
  {
    src: eastSikkimLake,
    title: "Tsomgo Lake",
    location: "East Sikkim"
  },
  {
    src: northSikkimValley,
    title: "Yumthang Valley",
    location: "North Sikkim"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    title: "Mountain Roads",
    location: "Zuluk Zig Zag"
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    title: "Valley Views",
    location: "Lachung"
  },
  {
    src: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    title: "Snow Peaks",
    location: "Zero Point"
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    title: "Peaceful Mornings",
    location: "Selleri Goan"
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    title: "Misty Mountains",
    location: "Nathang Valley"
  }
];

const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Tour Highlights
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Glimpses of Sikkim
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real moments from our tours — breathtaking landscapes, serene valleys, and unforgettable experiences await you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 ? "col-span-2 row-span-2" : ""
              } ${index === 3 ? "md:col-span-2" : ""}`}
            >
              <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm md:text-base">{image.title}</h3>
                  <p className="text-white/80 text-xs md:text-sm">{image.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black/95 border-none">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {selectedIndex !== null && (
            <div className="relative">
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].title}
                className="w-full max-h-[80vh] object-contain"
              />

              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-display text-xl font-semibold">
                  {galleryImages[selectedIndex].title}
                </h3>
                <p className="text-white/70 text-sm">
                  {galleryImages[selectedIndex].location}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotoGallery;
