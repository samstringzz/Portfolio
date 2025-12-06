import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<div className="bg-gray-50 dark:bg-primary-dark min-h-screen">
			<ProjectsProvider>
				{/* Page Header */}
				<div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 dark:from-blue-900 dark:via-blue-800 dark:to-cyan-800 py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto text-center">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
							My <span className="text-yellow-300">Projects</span>
						</h1>
						<p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
							A collection of web and mobile applications I've built, showcasing my expertise in full-stack development, mobile apps, and modern web technologies.
						</p>
						<div className="flex flex-wrap justify-center gap-4 mt-8">
							<span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
								15+ Projects
							</span>
							<span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
								Mobile & Web
							</span>
							<span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
								Production Ready
							</span>
						</div>
					</div>
				</div>

				{/* Projects Grid */}
				<div className="container mx-auto py-12">
					<ProjectsGrid />
				</div>
			</ProjectsProvider>
		</div>
	);
};

export default Projects;
