import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle, Users, Clock, ShieldCheck, Heart, Zap, ArrowRightCircle, Mail as Email } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

const fadeInUp: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const fadeInItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.2 }
  }
};

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className = '', ...props }: AnimatedSectionProps) => (
  <motion.section
    className={className}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp}
    {...props}
  >
    {children}
  </motion.section>
);

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedDiv = ({ children, className = '', delay = 0 }: AnimatedDivProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ 
      opacity: 1, 
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

// Animation variants for CTA section
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      
      
      {/* Featured Services */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInItem} className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</motion.h2>
            <motion.p variants={fadeInItem} className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive staffing solutions tailored to meet your business needs across multiple industries.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hospitality Staffing",
                description: "Professional staff for hotels, restaurants, and events.",
                icon: <Users className="w-8 h-8 text-primary mb-4" />
              },
              {
                title: "Logistics & Warehousing",
                description: "Reliable workforce for your supply chain needs.",
                icon: <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              },
              {
                title: "Temporary Staffing",
                description: "Flexible staffing solutions for short-term needs.",
                icon: <Clock className="w-8 h-8 text-primary mb-4" />
              }
            ].map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <CardHeader className="px-0 pt-4 pb-2">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button asChild variant="link" className="mt-4 text-primary">
                    <a href="/services">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/about.jpg" 
                alt="Our Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Savees Group</h2>
              <p className="text-muted-foreground mb-6">
                With over a decade of experience in the staffing industry, Savees Group has established itself as a trusted partner for businesses across the UK. Our commitment to excellence and personalized service sets us apart.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Experienced & vetted professionals",
                  "24/7 support and availability",
                  "Flexible staffing solutions",
                  "Industry-specific expertise"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild>
                <a href="/services" className="flex items-center gap-2">
                  Learn More About Our Services <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInItem} className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</motion.h2>
            <motion.p variants={fadeInItem} className="text-muted-foreground max-w-2xl mx-auto">
              Guiding principles that define who we are and how we operate
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
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
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={index} 
                  className="p-8 text-center"
                  variants={fadeInItem}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInItem} className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</motion.h2>
            <motion.p variants={fadeInItem} className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "HR Manager, Luxury Hotels Ltd",
                content: "Savees Group has been instrumental in providing us with top-notch hospitality staff. Their candidates are always professional and well-vetted.",
                avatar: "SJ"
              },
              {
                name: "Michael Brown",
                role: "Operations Director, Swift Logistics",
                content: "The team at Savees Group understands our business needs. They've consistently provided reliable staff for our warehouse operations.",
                avatar: "MB"
              },
              {
                name: "Emma Wilson",
                role: "Event Manager, Premier Events",
                content: "For our high-profile events, we trust Savees Group to provide professional and experienced event staff. Never been disappointed!",
                avatar: "EW"
              }
            ].map((testimonial, index) => (
              <motion.div variants={fadeInItem} key={index}>
                <Card className="p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { number: '30+', label: 'Years Experience' },
              { number: '200+', label: 'Clients Served' },
              { number: '1000+', label: 'Professionals Placed' },
              { number: '93%', label: 'Retention Rate' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="p-4"
                variants={fadeInItem}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-primary-foreground/90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <motion.section 
        className="py-16 md:py-24 bg-white text-foreground overflow-hidden relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={item} className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Find Your Perfect Match?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p 
            variants={item}
            className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg"
          >
            Whether you're looking for staff or seeking employment opportunities, we're here to help you succeed.
          </motion.p>
          
          <motion.div 
            variants={container}
            className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto"
          >
            <motion.div variants={item} whileHover="hover">
              <Button asChild variant="secondary" size="lg" className="group">
                <a href="/contact" className="flex items-center gap-2">
                  Get Started 
                  <ArrowRightCircle className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div variants={item} whileHover="hover">
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-foreground/20 hover:bg-foreground/5 hover:border-foreground/40 group"
              >
                <a href="mailto:saveesgroupltd@gmail.com" className="flex items-center gap-2">
                  <Email className="w-5 h-5" />
                  Email Us
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-10 -left-10 w-20 h-20 bg-primary/5 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { delay: 0.5, duration: 0.8 }
            }}
          />
          <motion.div 
            className="absolute -bottom-5 -right-5 w-16 h-16 bg-primary/5 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { delay: 0.7, duration: 0.8 }
            }}
          />
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
