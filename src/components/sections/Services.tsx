import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat, Truck, Clock, Users } from "lucide-react";
import hospitalityIcon from "@/assets/hospitality-icon.jpg";
import logisticsIcon from "@/assets/logistics-icon.jpg";

const Services = () => {
  const services = [
    {
      title: "Hospitality Staffing",
      description: "Expert staffing solutions for restaurants, hotels, bars, and catering services across the UK.",
      image: hospitalityIcon,
      features: [
        "Experienced waiters and waitresses",
        "Skilled kitchen staff and chefs",
        "Bar staff and mixologists", 
        "Event and catering personnel"
      ],
      icon: ChefHat
    },
    {
      title: "Logistics Staffing",
      description: "Reliable workforce solutions for warehouses, distribution centers, and transportation companies.",
      image: logisticsIcon,
      features: [
        "Warehouse operatives",
        "Forklift and machinery operators",
        "Delivery and courier drivers",
        "Inventory and stock management"
      ],
      icon: Truck
    }
  ];

  const serviceTypes = [
    {
      icon: Clock,
      title: "Temporary Placements",
      description: "Flexible staffing for seasonal peaks, events, and short-term coverage needs."
    },
    {
      icon: Users,
      title: "Permanent Placements", 
      description: "Long-term recruitment solutions to build your core team with quality candidates."
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive staffing solutions tailored to your industry needs
            </p>
          </div>

          {/* Main Services */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 animate-slide-up">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="border-accent text-accent hover:bg-accent hover:text-white"
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Service Types */}
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Placement Types
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {serviceTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-shadow duration-300">
                    <CardContent className="p-8 flex items-start space-x-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-3">
                          {type.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;