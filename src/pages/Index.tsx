import { CVHeader } from "@/components/CVHeader";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CVHeader />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Index;
