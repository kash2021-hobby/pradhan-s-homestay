import { MessageCircle, Calendar, MapPin, Clock, TreePine, Mountain, Camera } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import eastSikkimImage from "@/assets/east-sikkim-lake.jpg";
import northSikkimImage from "@/assets/north-sikkim-valley.jpg";

const WHATSAPP_NUMBER = "919164060961";

const packages = [
  {
    id: "east-sikkim",
    title: "East Sikkim Scenic Tour",
    duration: "6 Days / 5 Nights",
    image: eastSikkimImage,
    highlights: ["Zuluk Zig Zag Road", "Changu Lake", "Kanchenjunga Views", "Historic Temples"],
    description: "Explore the hidden gems of East Sikkim through winding mountain roads, pristine lakes, and breathtaking viewpoints.",
    itinerary: [
      {
        day: "Day 01",
        title: "NJP to Selleri Goan",
        description: "Arrive at NJP Station and transfer to Selleri Goan village. Evening sightseeing by foot through the peaceful village trails.",
        overnight: "Selleri Goan"
      },
      {
        day: "Day 02", 
        title: "Selleri Goan to Aritar",
        description: "After breakfast, travel to Aritar Lake via the ancient Ganesh Mandir and scenic Lampokhari Lake. Enjoy the serene lakeside atmosphere.",
        overnight: "Aritar"
      },
      {
        day: "Day 03",
        title: "Aritar to Nimachen",
        description: "Journey to Nimachen via Mankhim View Point with stunning Kanchenjunga views, Buddha Statue, Rongli Market, and the mesmerizing Kuekhola Waterfalls.",
        overnight: "Nimachen"
      },
      {
        day: "Day 04",
        title: "Nimachen to Gangtok via Zuluk",
        description: "The most scenic day! Travel through Zuluk, the famous Zig Zag Road with 32 hairpin bends, Thambi View Point, Old Baba Mandir, Tukla Valley, Elephant Lake, Changu Lake, and Nathang Valley.",
        overnight: "Gangtok"
      },
      {
        day: "Day 05",
        title: "Gangtok Local Sightseeing",
        description: "Explore Gangtok's seven major attractions including monasteries, viewpoints, and local markets. Experience the capital city's vibrant culture.",
        overnight: "Gangtok"
      },
      {
        day: "Day 06",
        title: "Gangtok to NJP",
        description: "After a hearty breakfast, transfer back to NJP Station with sweet memories of your Sikkim adventure. 🌲",
        overnight: "Tour Ends"
      }
    ]
  },
  {
    id: "north-sikkim",
    title: "North Sikkim - Lachung & Yumthang",
    duration: "5 Days / 4 Nights",
    image: northSikkimImage,
    highlights: ["Yumthang Valley", "Zero Point", "Seven Sisters Waterfalls", "Snow Views"],
    description: "Journey to the enchanting Valley of Flowers and experience snow-capped peaks at Zero Point in North Sikkim.",
    itinerary: [
      {
        day: "Day 01",
        title: "NJP to Gangtok",
        description: "Arrive at NJP and enjoy a scenic drive to Gangtok, the capital city. Check-in and relax while taking in the mountain views.",
        overnight: "Gangtok"
      },
      {
        day: "Day 02",
        title: "Gangtok to Lachung",
        description: "Travel through stunning landscapes to Lachung. Stop at the magnificent Seven Sisters Waterfalls and Amitabh Bachchan Waterfalls en route.",
        overnight: "Lachung"
      },
      {
        day: "Day 03",
        title: "Yumthang Valley & Zero Point",
        description: "Early morning excursion to the famous Yumthang Valley - the Valley of Flowers. Continue to Zero Point (15,300 ft) for a surreal snow experience.",
        overnight: "Lachung"
      },
      {
        day: "Day 04",
        title: "Lachung to Gangtok",
        description: "Return journey to Gangtok with sightseeing stops along the way. Enjoy the changing landscapes from alpine to subtropical.",
        overnight: "Gangtok"
      },
      {
        day: "Day 05",
        title: "Gangtok to NJP",
        description: "After breakfast, transfer to NJP Station. Your North Sikkim adventure concludes with beautiful memories. 🌲",
        overnight: "Tour Ends"
      }
    ]
  }
];

const TourPackages = () => {
  const createWhatsAppLink = (packageTitle: string) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the "${packageTitle}" package from Pradhan's Homestay. Please share pricing and availability details.`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <section id="packages" className="section-padding bg-gradient-mist">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
            Curated Experiences
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Tour Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handcrafted itineraries with NJP pickup and drop, comfortable stays, 
            and authentic Sikkim experiences.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="card-tour">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {pkg.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.highlights.map((highlight) => (
                    <span 
                      key={highlight}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                    >
                      <Mountain className="w-3 h-3" />
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Itinerary Accordion */}
                <Accordion type="single" collapsible className="mb-6">
                  <AccordionItem value="itinerary" className="border-border">
                    <AccordionTrigger className="text-foreground hover:text-accent hover:no-underline">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        View Full Itinerary
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        {pkg.itinerary.map((day) => (
                          <div key={day.day} className="relative pl-6 pb-4 border-l-2 border-accent/30 last:border-l-0 last:pb-0">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-accent font-semibold text-sm">{day.day}</span>
                              <span className="text-foreground font-medium">{day.title}</span>
                            </div>
                            <p className="text-muted-foreground text-sm">{day.description}</p>
                            <span className="inline-flex items-center gap-1 text-xs text-valley-green mt-2">
                              <MapPin className="w-3 h-3" />
                              Overnight: {day.overnight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* CTA */}
                <a
                  href={createWhatsAppLink(pkg.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* NJP Note */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
          <TreePine className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-foreground font-medium">
            All tours include <span className="text-accent font-semibold">NJP Station Pickup & Drop</span> service
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Start and end your journey hassle-free at New Jalpaiguri Railway Station
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
