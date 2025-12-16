import { Star, ExternalLink, Quote } from "lucide-react";

const GOOGLE_REVIEW_LINK = "https://share.google/f7F5RTOiEezKZ9sSo";

const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Amazing experience! The hospitality was top-notch and the tour was perfectly organized. Highly recommend Pradhan's Homestay for anyone visiting Sikkim.",
    date: "2 weeks ago"
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Best decision we made for our Sikkim trip. The driver was very knowledgeable and took us to beautiful spots that aren't on typical tourist routes.",
    date: "1 month ago"
  },
  {
    name: "Amit Ghosh",
    rating: 5,
    text: "The East Sikkim tour was breathtaking! Zuluk and the zig-zag roads were highlights. Great food and comfortable stay throughout.",
    date: "3 weeks ago"
  },
  {
    name: "Sneha Patel",
    rating: 5,
    text: "Yumthang Valley was like a dream! Thank you for making our family trip so memorable. Will definitely come back for more.",
    date: "1 month ago"
  }
];

const GoogleReviews = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
            Trusted by Travelers
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          
          {/* Google Rating Badge */}
          <div className="inline-flex flex-col items-center bg-card border border-border rounded-2xl p-6 mt-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-3xl font-display font-bold text-foreground">4.9</p>
            <p className="text-muted-foreground text-sm">Based on Google Reviews</p>
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
            >
              <img 
                src="https://www.google.com/favicon.ico" 
                alt="Google" 
                className="w-4 h-4"
              />
              View on Google
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 relative hover:shadow-soft transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-foreground leading-relaxed mb-4">"{review.text}"</p>
              
              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{review.name}</p>
                    <p className="text-muted-foreground text-xs">{review.date}</p>
                  </div>
                </div>
                <img 
                  src="https://www.google.com/favicon.ico" 
                  alt="Google Review" 
                  className="w-5 h-5 opacity-50"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            See All Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
