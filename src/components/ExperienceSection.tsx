import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Led a team of 5 developers in building a microservices architecture serving 1M+ users. Implemented CI/CD pipelines reducing deployment time by 60%. Mentored junior developers and conducted technical interviews.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL"]
  },
  {
    title: "Software Engineer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description: "Developed and maintained full-stack web applications using modern technologies. Collaborated with product teams to deliver features that improved user engagement by 40%.",
    technologies: ["React", "Python", "Django", "MongoDB", "Redis"]
  },
  {
    title: "Junior Developer",
    company: "DevShop Solutions",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: "Built responsive web applications and RESTful APIs. Participated in code reviews and agile development processes. Gained experience in test-driven development.",
    technologies: ["JavaScript", "Vue.js", "PHP", "MySQL", "Git"]
  }
];

export const ExperienceSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-in border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                      <h3 className="text-lg font-semibold text-primary">
                        {exp.company}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-sm gap-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-accent text-accent-foreground hover:bg-accent/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};