import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";
import UseScrollToTop from "./hooks/useScrollToTop";

const About = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle.jsx"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails.jsx"));

function App() {
  return (
    <div className="bg-secondary-light transition duration-300 dark:bg-primary-dark">
      <Router>
        <ScrollToTop />
        <AppHeader />
        <Suspense fallback={""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/single-project" element={<ProjectSingle />} />
            <Route path="projects/:slug" element={<ProjectDetails />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <AppFooter />
      </Router>
      <UseScrollToTop />
    </div>
  );
}

export default App;
