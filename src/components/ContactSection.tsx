import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Download, Linkedin, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in text-center">
          Let's Connect
        </h2>
        
        <Card className="shadow-elegant animate-slide-in bg-gradient-primary text-primary-foreground">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to discuss your next project?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                I'm always open to new opportunities and interesting conversations.
              </p>
              
              <Button 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-primary-foreground/20 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm opacity-90">john.doe@example.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-primary-foreground/20 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm opacity-90">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-primary-foreground/20 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm opacity-90">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="lg"
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};