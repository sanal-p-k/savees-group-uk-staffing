import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat, Truck, Clock, Users } from "lucide-react";
import hospitalityIcon from "@/assets/hospitality-icon.jpg";
import logisticsIcon from "@/assets/logistics-icon.jpg";

interface ServicesProps {
  expanded?: boolean;
}

const Services = ({ expanded = false }: ServicesProps) => {
  const services = [
    {
      title: "Hospitality Staffing",
      description: "Comprehensive staffing solutions for the UK's dynamic hospitality sector, providing skilled professionals for every role in restaurants, hotels, bars, and catering services.",
      detailedDescription: "Our hospitality staffing service specializes in connecting top-tier talent with premier establishments across the UK. We understand the fast-paced nature of the hospitality industry and provide staff who are not only skilled but also possess the right attitude and work ethic to excel in demanding environments. Our rigorous screening process ensures that every candidate meets our high standards of professionalism and customer service.",
      image: hospitalityIcon,
      features: [
        "Experienced waiters and waitresses trained in fine dining and high-volume service",
        "Qualified chefs and kitchen staff with expertise in various cuisines",
        "Professional baristas, bartenders, and mixologists with extensive product knowledge",
        "Event staff for weddings, corporate functions, and special occasions",
        "Hotel staff including front desk, housekeeping, and concierge services",
        "Temporary and permanent placement options to suit your business needs",
        "24/7 support for last-minute staffing requirements"
      ],
      benefits: [
        "Reduced recruitment time and costs",
        "Fully vetted and reference-checked candidates",
        "Compliance with UK employment laws and regulations",
        "Flexible staffing solutions for seasonal demands",
        "Consistent quality across all staff placements"
      ],
      icon: ChefHat,
      industries: ["Restaurants", "Hotels & Resorts", "Bars & Pubs", "Catering Companies", "Event Venues", "Cruise Ships"]
    },
    {
      title: "Logistics & Warehouse Staffing",
      description: "Efficient and reliable workforce solutions for the UK's growing logistics, warehousing, and distribution sectors.",
      detailedDescription: "Our logistics staffing service provides skilled and reliable workers to keep your supply chain moving smoothly. We understand the critical nature of logistics operations and provide staff who are trained in health and safety protocols, inventory management, and efficient warehouse operations. Whether you need temporary staff for peak periods or permanent employees for long-term growth, we have the right candidates for your business.",
      image: logisticsIcon,
      features: [
        "Certified forklift and reach truck operators with up-to-date licenses",
        "Warehouse operatives experienced in picking, packing, and dispatch",
        "HGV and delivery drivers with clean licenses and CPC certification",
        "Inventory control and stock management specialists",
        "Quality control and inspection personnel",
        "Team leaders and supervisors with logistics experience",
        "Temporary-to-permanent staffing options"
      ],
      benefits: [
        "Rapid deployment of skilled workers",
        "Reduced training time with job-ready staff",
        "Compliance with health and safety regulations",
        "Scalable workforce solutions for peak seasons",
        "Dedicated account management"
      ],
      icon: Truck,
      industries: ["E-commerce Fulfillment", "3PL Providers", "Manufacturing", "Retail Distribution", "Cold Storage", "Freight Forwarding"]
    }
  ];

  const serviceTypes = [
    {
      icon: Clock,
      title: "Temporary Placements",
      description: "Flexible staffing solutions for short-term needs, seasonal peaks, and special events.",
      details: [
        "Day or shift-based staffing",
        "Weekend and holiday coverage",
        "Maternity/paternity cover",
        "Project-based assignments",
        "Last-minute staffing requirements"
      ]
    },
    {
      icon: Users,
      title: "Permanent Placements", 
      description: "Strategic recruitment of long-term employees who will grow with your business.",
      details: [
        "Executive and management recruitment",
        "Departmental team building",
        "Skills-based hiring",
        "Cultural fit assessment",
        "Retention-focused placements"
      ]
    },
    {
      icon: Clock,
      title: "Temp-to-Perm",
      description: "Evaluate potential employees on the job before making a permanent hiring decision.",
      details: [
        "Risk-free trial period",
        "Performance evaluation",
        "Smooth transition process",
        "Reduced hiring risks",
        "Flexible contract terms"
      ]
    },
    {
      icon: Users,
      title: "Contract Staffing",
      description: "Specialized professionals for fixed-term projects and specific business needs.",
      details: [
        "Project-based hiring",
        "Specialist skill sets",
        "Fixed-duration contracts",
        "Expert consultants",
        "Niche industry experts"
      ]
    }
  ];

  return (
    <section id="services" className={`py-16 md:py-24 bg-muted/20 ${expanded ? 'min-h-screen' : ''}`}>
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

          {/* Service Details */}
          <div className="space-y-16 mb-16">
            {services.map((service, index) => (
              <div key={`details-${index}`} className="bg-white rounded-xl shadow-medium p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Our {service.title}?</h3>
                    <p className="text-muted-foreground mb-6">{service.detailedDescription}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent mr-2">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-primary">Industries We Serve:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((industry, i) => (
                          <span key={i} className="bg-muted/50 px-3 py-1 rounded-full text-sm">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <h4 className="font-semibold text-lg mb-4 text-primary">Our {service.title} Solutions Include:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="bg-muted/20 p-4 rounded-lg">
                          <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                            <service.icon className="w-4 h-4 text-accent" />
                          </div>
                          <p className="text-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Types */}
          <div className="animate-slide-up mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Our Staffing Solutions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="text-xl font-semibold text-primary mb-3">
                        {type.title}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {type.description}
                      </p>
                      <ul className="space-y-2 mt-2 text-sm text-muted-foreground">
                        {type.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-primary/90 text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Find Your Perfect Staffing Solution?</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your staffing needs and discover how we can help your business thrive with the right talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-black hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;