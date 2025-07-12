import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CVHeader = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            John Doe
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-6 opacity-90">
            Senior Software Engineer
          </h2>
          <p className="text-lg mb-8 opacity-85 max-w-2xl">
            Passionate software engineer with 5+ years of experience building scalable web applications 
            and leading development teams. Specialized in React, Node.js, and cloud architecture.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <Button
              variant="secondary"
              size="sm"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Mail className="w-4 h-4 mr-2" />
              john.doe@example.com
            </Button>
            
            <Button
              variant="secondary"
              size="sm"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Phone className="w-4 h-4 mr-2" />
              +1 (555) 123-4567
            </Button>
            
            <Button
              variant="secondary"
              size="sm"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <MapPin className="w-4 h-4 mr-2" />
              San Francisco, CA
            </Button>
            
            <div className="flex gap-2 ml-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};