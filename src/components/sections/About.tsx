import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "We build lasting relationships based on reliability, transparency, and integrity in every placement we make."
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Our streamlined processes ensure quick turnaround times without compromising on quality or thorough vetting."
    },
    {
      icon: Heart,
      title: "Commitment",
      description: "We're dedicated to understanding your needs and delivering staffing solutions that exceed expectations."
    }
  ];

  return (
    <section id="about" className="section-padding subtle-gradient">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              About Savees Group Ltd
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in UK staffing solutions
            </p>
          </div>

          {/* Story */}
          <div className="mb-16 animate-slide-up">
            <Card className="border-none shadow-medium">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Founded with a vision to bridge the gap between exceptional talent and leading businesses, 
                    <strong className="text-primary"> Savees Group Ltd</strong> has established itself as a 
                    premier staffing agency specializing in the hospitality and logistics sectors across the UK.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    With deep roots in the UK market, we understand the unique challenges facing businesses 
                    in these dynamic industries. Our team combines local expertise with industry-leading 
                    recruitment practices to deliver staffing solutions that drive success.
                  </p>
                  <p className="text-lg leading-relaxed text-accent font-semibold">
                    From bustling restaurants to busy warehouses, we connect the right people with the 
                    right opportunities, creating partnerships that last.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Our Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="text-xl font-semibold text-primary mb-4">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
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

export default About;