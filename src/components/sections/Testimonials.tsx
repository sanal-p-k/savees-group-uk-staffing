import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      position: "Operations Manager",
      company: "The Crown & Anchor Pub",
      content: "Savees Group has been our go-to staffing partner for over two years. Their understanding of the hospitality industry and quality of candidates is exceptional. They consistently deliver professional, reliable staff who fit perfectly with our team culture.",
      rating: 5,
      type: "client"
    },
    {
      name: "James Patterson",
      position: "Warehouse Supervisor", 
      company: "Express Logistics Ltd",
      content: "The efficiency and professionalism of Savees Group is outstanding. They provided us with skilled warehouse operatives during our peak season, and every single placement exceeded our expectations. Highly recommended for logistics staffing.",
      rating: 5,
      type: "client"
    },
    {
      name: "Maria Rodriguez",
      position: "Head Waiter",
      company: "Placed at Fine Dining Restaurant",
      content: "Working with Savees Group changed my career. They found me the perfect position that matched my skills and ambitions. The support throughout the placement process was excellent, and I felt valued every step of the way.",
      rating: 5,
      type: "candidate"
    },
    {
      name: "David Thompson",
      position: "Logistics Manager",
      company: "Metro Distribution Center",
      content: "When we needed experienced forklift operators quickly, Savees Group delivered within 48 hours. The candidates were fully qualified, professional, and integrated seamlessly into our operations. Their service is simply outstanding.",
      rating: 5,
      type: "client"
    },
    {
      name: "Emma Johnson",
      position: "Kitchen Assistant",
      company: "Placed at Award-Winning Restaurant",
      content: "I was nervous about finding work in a new city, but Savees Group made it so easy. They understood exactly what I was looking for and found me a position where I could grow my culinary skills. I couldn't be happier!",
      rating: 5,
      type: "candidate"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Building trust through exceptional service and successful placements
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative animate-slide-up">
            <Card className="border-none shadow-strong overflow-hidden">
              <CardContent className="p-0">
                <div className="relative min-h-[400px] flex items-center">
                  {/* Quote Background */}
                  <div className="absolute top-8 left-8 opacity-10">
                    <Quote className="w-16 h-16 text-accent" />
                  </div>

                  {/* Testimonial Content */}
                  <div className="w-full p-8 md:p-12">
                    <div className="text-center max-w-3xl mx-auto">
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>

                      {/* Content */}
                      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                        "{testimonials[currentIndex].content}"
                      </blockquote>

                      {/* Author */}
                      <div className="border-t border-border pt-6">
                        <h4 className="text-xl font-semibold text-primary mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-muted-foreground mb-1">
                          {testimonials[currentIndex].position}
                        </p>
                        <p className="text-accent font-medium">
                          {testimonials[currentIndex].company}
                        </p>
                        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                          testimonials[currentIndex].type === 'client' 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-accent/10 text-accent'
                        }`}>
                          {testimonials[currentIndex].type === 'client' ? 'Client' : 'Candidate'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-accent text-accent hover:bg-accent hover:text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-accent' : 'bg-border'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-accent text-accent hover:bg-accent hover:text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;