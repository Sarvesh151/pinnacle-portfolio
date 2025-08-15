import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-hero font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Alex Morgan
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
            World-Class UI/UX Designer & Developer
          </p>
          <p className="text-lg text-blue-200/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Creating digital experiences that define the future. Specializing in premium interfaces 
            that combine stunning aesthetics with flawless functionality.
          </p>
        </div>
        
        <div className="animate-fade-in flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" style={{ animationDelay: '0.3s' }}>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 text-lg"
          >
            View My Work <ArrowRight className="ml-2" />
          </Button>
          <Button 
            variant="glass" 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 text-lg"
          >
            Let's Connect
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="animate-fade-in flex justify-center gap-6" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:alex@example.com"
            className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-3 bg-white/60 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;