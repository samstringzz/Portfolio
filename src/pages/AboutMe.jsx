import AboutMeBio from "../components/about/AboutMeBio";
import { AboutMeProvider } from "../context/AboutMeContext";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-primary-dark">
      <AboutMeProvider>
        <AboutMeBio />
      </AboutMeProvider>
      <Experience />
      <Skills />
    </div>
  );
};

export default About;
