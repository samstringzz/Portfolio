import { ProjectsProvider } from "../context/ProjectsContext";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import Experience from "../components/Experience";
import ContactCTA from "../components/ContactCTA";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ProjectsProvider>
        <FeaturedProjects />
      </ProjectsProvider>
      <Experience />
      <ContactCTA />
    </main>
  );
};

export default Home;
