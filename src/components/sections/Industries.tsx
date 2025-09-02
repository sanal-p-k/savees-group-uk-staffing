import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Package, Truck } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Utensils,
      title: "Hospitality",
      description: "Restaurants, hotels, bars, cafes, and catering services across the UK.",
      details: [
        "Fine dining establishments",
        "Chain restaurants and pubs",
        "Hotels and resorts",
        "Event and wedding venues",
        "Corporate catering"
      ],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Package,
      title: "Warehousing & Logistics",
      description: "Distribution centers, fulfillment facilities, and storage operations.",
      details: [
        "E-commerce fulfillment centers",
        "Manufacturing warehouses",
        "Cold storage facilities",
        "Distribution hubs",
        "Inventory management centers"
      ],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Truck,
      title: "Transportation",
      description: "Delivery services, courier companies, and logistics providers.",
      details: [
        "Last-mile delivery services",
        "Courier and parcel companies",
        "Food delivery platforms",
        "Freight and haulage",
        "Specialized transport services"
      ],
      gradient: "from-secondary/40 to-secondary/10"
    }
  ];

  return (
    <section id="industries" className="section-padding subtle-gradient">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized expertise across key sectors of the UK economy
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid lg:grid-cols-3 gap-8 animate-slide-up">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="border-none shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden group">
                  <div className={`bg-gradient-to-br ${industry.gradient} p-8 relative`}>
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">
                        Sectors We Cover:
                      </h4>
                      <ul className="space-y-2">
                        {industry.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-white rounded-lg shadow-soft p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Don't See Your Industry?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                We're always expanding our reach. Contact us to discuss your specific staffing needs, 
                and we'll work with you to find the perfect solution.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-200"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;