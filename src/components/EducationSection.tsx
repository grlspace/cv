import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, CalendarDays } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  achievements?: string[];
}

const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    period: "2015 - 2019",
    description: "Graduated Magna Cum Laude with focus on Software Engineering and Algorithms.",
    achievements: ["GPA: 3.8/4.0", "Dean's List", "President of Computer Science Club"]
  }
];

const certifications = [
  "AWS Solutions Architect Professional",
  "Google Cloud Professional Developer",
  "Certified Kubernetes Administrator (CKA)",
  "Scrum Master Certification"
];

export const EducationSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in text-center">
          Education & Certifications
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                Education
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4">
                  <h3 className="font-semibold text-foreground text-lg">
                    {edu.degree}
                  </h3>
                  <div className="text-primary font-medium mb-2">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <CalendarDays className="w-4 h-4" />
                    {edu.period}
                  </div>
                  {edu.description && (
                    <p className="text-muted-foreground mb-3">
                      {edu.description}
                    </p>
                  )}
                  {edu.achievements && (
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <Badge 
                          key={achIndex}
                          variant="secondary"
                          className="bg-accent text-accent-foreground"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                Certifications
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};