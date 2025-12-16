import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TourPackages from "@/components/TourPackages";
import HomestayExperience from "@/components/HomestayExperience";
import VehicleFleet from "@/components/VehicleFleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import PhotoGallery from "@/components/PhotoGallery";
import GoogleReviews from "@/components/GoogleReviews";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <TourPackages />
        <HomestayExperience />
        <WhyChooseUs />
        <PhotoGallery />
        <VehicleFleet />
        <GoogleReviews />
        <EnquiryForm />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
