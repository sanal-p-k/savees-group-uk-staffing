import Navigation from "@/components/layout/Navigation";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <About expanded={true} />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
