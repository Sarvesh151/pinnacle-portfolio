import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Code, 
  Smartphone, 
  Zap, 
  Globe, 
  Database,
  Figma,
  Chrome
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design",
      icon: Palette,
      skills: ["UI/UX Design", "Design Systems", "Prototyping", "User Research", "Wireframing"],
      color: "bg-gradient-to-r from-pink-500 to-purple-600"
    },
    {
      title: "Frontend",
      icon: Code,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      color: "bg-gradient-to-r from-blue-500 to-cyan-600"
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "Responsive Design", "PWA", "Mobile UX", "App Store Optimization"],
      color: "bg-gradient-to-r from-green-500 to-emerald-600"
    },
    {
      title: "Performance",
      icon: Zap,
      skills: ["Web Vitals", "Optimization", "Accessibility", "SEO", "Performance Audits"],
      color: "bg-gradient-to-r from-yellow-500 to-orange-600"
    },
    {
      title: "Web3",
      icon: Globe,
      skills: ["Blockchain UI", "DeFi", "NFT Platforms", "Web3 UX", "Crypto Wallets"],
      color: "bg-gradient-to-r from-indigo-500 to-purple-600"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "PostgreSQL", "GraphQL", "REST APIs", "Cloud Services"],
      color: "bg-gradient-to-r from-gray-600 to-gray-800"
    }
  ];

  const tools = [
    { name: "Figma", icon: Figma, level: 95 },
    { name: "React", icon: Code, level: 92 },
    { name: "TypeScript", icon: Code, level: 88 },
    { name: "Design Systems", icon: Palette, level: 94 },
    { name: "Next.js", icon: Chrome, level: 85 },
    { name: "Framer Motion", icon: Zap, level: 90 }
  ];

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-display font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for creating world-class digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 glass hover-lift group cursor-pointer">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{skill}</span>
                      <Badge variant="secondary" className="text-xs">Expert</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tools Proficiency */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-title font-semibold mb-8 text-center">Core Tools Proficiency</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <tool.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{tool.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{tool.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tool.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;