import { Heart, MapPinned, Home, Clock, Shield, Star } from "lucide-react";

const reasons = [
  {
    icon: MapPinned,
    title: "Local Expertise",
    description: "Born and raised in Sikkim, we know every hidden trail, viewpoint, and local secret to make your trip special."
  },
  {
    icon: Home,
    title: "Homestay Experience",
    description: "Stay with local families, enjoy authentic Sikkimese cuisine, and experience genuine Himalayan hospitality."
  },
  {
    icon: Clock,
    title: "Flexible Itineraries",
    description: "Your trip, your pace. We customize tours based on your interests, fitness level, and time constraints."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Experienced drivers, well-maintained vehicles, and comprehensive knowledge of mountain road conditions."
  },
  {
    icon: Star,
    title: "Personalized Service",
    description: "Small groups mean more attention to detail. We treat every guest like family, not just another booking."
  },
  {
    icon: Heart,
    title: "Memorable Experiences",
    description: "From sunrise viewpoints to hidden waterfalls, we create moments that become lifelong memories."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gradient-mountain text-primary-foreground">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
            Why Travel With Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Pradhan's Homestay Difference
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            More than just tours – we offer authentic connections with the land, 
            people, and culture of Sikkim.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 md:p-8 hover:bg-primary-foreground/10 transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-5">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
