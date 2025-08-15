import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FinTech Dashboard",
      description: "A comprehensive financial dashboard with real-time analytics, portfolio management, and advanced charting capabilities. Built for a leading fintech startup.",
      tags: ["React", "TypeScript", "D3.js", "Tailwind"],
      image: "🏦",
      type: "Featured",
      github: "#",
      live: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with AI-powered recommendations, seamless checkout, and advanced inventory management system.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      image: "🛍️",
      type: "Featured",
      github: "#",
      live: "#"
    },
    {
      title: "Design System",
      description: "Comprehensive design system and component library used across multiple products, improving consistency and development speed by 60%.",
      tags: ["Figma", "Storybook", "React", "Design Tokens"],
      image: "🎨",
      type: "Open Source",
      github: "#",
      live: "#"
    },
    {
      title: "SaaS Analytics",
      description: "Advanced analytics platform for SaaS companies with custom dashboards, user behavior tracking, and predictive insights.",
      tags: ["Vue.js", "Python", "Machine Learning", "AWS"],
      image: "📊",
      type: "Client Work",
      github: "#",
      live: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with biometric authentication, instant transfers, and budget tracking.",
      tags: ["React Native", "Node.js", "MongoDB", "Security"],
      image: "📱",
      type: "Featured",
      github: "#",
      live: "#"
    },
    {
      title: "NFT Marketplace",
      description: "Premium NFT marketplace with advanced filtering, auction system, and integrated wallet connectivity for seamless trading.",
      tags: ["Web3", "Ethereum", "IPFS", "Smart Contracts"],
      image: "🖼️",
      type: "Web3",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-display font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of premium digital experiences that drive real business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group glass hover-lift overflow-hidden">
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-secondary flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    {project.type}
                  </Badge>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="glass" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="glass" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                  <Button size="sm" variant="default" asChild className="flex-1">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      View Live <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button variant="premium" size="lg" className="px-8">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;