import { ProjectsProvider } from '../context/ProjectsContext';
import Hero from "../components/Hero";
import About from "../components/About";
import Achievements from "../components/Achievements";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import Stats from "../components/Stats";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import TechStack from "../components/TechStack";

const Home = () => {
	return (
		<main className="overflow-x-hidden">
			<Hero />
			<Stats />
			<About />
			<Experience />
			<Skills />
			<TechStack />
			<Achievements />
			<ProjectsProvider>
				<div className="container mx-auto">
					<FeaturedProjects />
				</div>
			</ProjectsProvider>
		</main>
	);
};

export default Home;
