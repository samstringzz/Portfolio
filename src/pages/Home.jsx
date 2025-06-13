import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import Hero from "../components/Hero";
import About from "../components/About";
import Achievements from "../components/Achievements";
import FeaturedProjects from "../components/projects/FeaturedProjects";

const Home = () => {
	return (
		<main>
			<Hero />
			<About />
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
