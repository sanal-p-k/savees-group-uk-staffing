import Navigation from "@/components/layout/Navigation";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <Services expanded={true} />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
