import AboutMeBio from "../components/about/AboutMeBio";
import AboutCounter from "../components/about/AboutCounter";
import AboutClients from "../components/about/AboutClients";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import TechStack from "../components/TechStack";

const About = () => {
  return (
    <div className="overflow-x-hidden bg-[#f8f4ed] dark:bg-[#120f0d]">
      <AboutMeProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
        >
          <AboutMeBio />
        </motion.div>

        {/** Counter without paddings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
        >
          <AboutCounter />
        </motion.div>
      </AboutMeProvider>

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Tech Stack Section */}
      <TechStack />

      <AboutMeProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        >
          <AboutClients />
        </motion.div>
      </AboutMeProvider>
    </div>
  );
};

export default About;
