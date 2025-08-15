import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Coffee, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Award, label: "5+ Years Experience", description: "Crafting premium digital experiences" },
    { icon: Users, label: "50+ Happy Clients", description: "From startups to Fortune 500 companies" },
    { icon: Coffee, label: "200+ Projects", description: "Delivered with excellence and precision" },
    { icon: Lightbulb, label: "Design Innovation", description: "Award-winning creative solutions" }
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-display font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that not only look stunning but drive real business results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl glass overflow-hidden hover-lift">
                <div className="w-full h-full bg-gradient-secondary rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-glow"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-title font-semibold">
                Crafting Premium Digital Experiences
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate UI/UX designer and developer who believes that great design is not just about aesthetics—it's about creating meaningful connections between brands and their audiences. With over 5 years of experience, I've had the privilege of working with innovative companies to bring their visions to life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines cutting-edge design principles with the latest development technologies to create experiences that are not only visually stunning but also highly functional and user-centered.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Core Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {["UI/UX Design", "React", "TypeScript", "Figma", "Framer Motion", "Tailwind CSS", "Next.js", "Design Systems"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm hover:bg-primary/20 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6 glass hover-lift group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-lg">{highlight.label}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;