import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Users } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS"]
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"]
  },
  {
    title: "Leadership",
    icon: Users,
    skills: ["Team Leadership", "Mentoring", "Code Review", "Agile", "Project Management"]
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in text-center">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="border-primary/20 text-foreground hover:border-primary hover:bg-primary/5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};