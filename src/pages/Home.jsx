import { ProjectsProvider } from '../context/ProjectsContext';
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

const Home = () => {
	return (
		<main className="overflow-x-hidden">
			<Hero />
			<ProjectsProvider>
				<FeaturedProjects />
			</ProjectsProvider>
			<Experience />
			<Skills />
			<About />
		</main>
	);
};

export default Home;
