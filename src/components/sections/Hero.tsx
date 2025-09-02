import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-staffing.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional staffing services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Savees<span className="text-accent">Group</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          {/* Tagline */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-light mb-8 leading-relaxed">
            Trusted Staffing for the UK<br />
            <span className="text-accent font-semibold">Hospitality & Logistics Industry</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Connecting exceptional talent with leading businesses across the UK. 
            Your reliable partner for hospitality and logistics staffing solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link to="/Contact">
                Get in Touch
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/30 px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link to="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;