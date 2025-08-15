import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "TechFlow Solutions",
      avatar: "👩‍💼",
      rating: 5,
      content: "Alex delivered an exceptional design system that transformed our entire product suite. The attention to detail and user experience expertise is truly world-class. Our conversion rates increased by 40% after the redesign.",
      project: "Design System & Product Redesign"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "FinanceForward",
      avatar: "👨‍💻",
      rating: 5,
      content: "Working with Alex was a game-changer for our fintech platform. The UI is not only beautiful but incredibly intuitive. Our users love the new interface, and we've seen a significant reduction in support tickets.",
      project: "FinTech Dashboard"
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      company: "GreenTech Innovations",
      avatar: "👩‍🔬",
      rating: 5,
      content: "Alex's ability to understand complex user journeys and translate them into elegant designs is remarkable. The mobile app they designed for us has received outstanding reviews and significantly improved user engagement.",
      project: "Mobile App Design"
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "StartupLaunch",
      avatar: "👨‍🚀",
      rating: 5,
      content: "As a startup, we needed someone who could move fast without compromising quality. Alex delivered a complete brand and web presence that helped us secure our Series A funding. Exceptional work ethic and results.",
      project: "Brand & Website Development"
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-display font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trusted by innovative companies to deliver exceptional results
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="mb-16">
          <Card className="glass p-8 lg:p-12 max-w-4xl mx-auto relative">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/30" />
            
            <div className="space-y-8">
              {/* Rating */}
              <div className="flex justify-center">
                <div className="flex space-x-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg lg:text-xl text-center leading-relaxed text-muted-foreground italic">
                "{testimonials[activeTestimonial].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-2xl">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                  </p>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    {testimonials[activeTestimonial].project}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`group p-4 rounded-xl transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'glass bg-primary/10 border-primary/20' 
                  : 'hover:bg-muted/50'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg transition-transform duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-gradient-primary text-primary-foreground scale-110' 
                    : 'bg-gradient-secondary group-hover:scale-105'
                }`}>
                  {testimonial.avatar}
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="text-sm text-muted-foreground">Client Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              50+
            </div>
            <p className="text-sm text-muted-foreground">Successful Projects</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              24h
            </div>
            <p className="text-sm text-muted-foreground">Average Response Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;