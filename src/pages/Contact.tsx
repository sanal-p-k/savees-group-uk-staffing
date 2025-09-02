import Navigation from "@/components/layout/Navigation";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <Contact expanded={true} />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
