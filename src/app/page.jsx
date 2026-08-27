import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Experience from "@/components/Experience";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Experience />
      <ContactCTA />
    </>
  );
}
