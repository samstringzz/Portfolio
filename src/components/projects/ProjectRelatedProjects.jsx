const ProjectRelatedProjects = ({ project }) => {
	
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{project.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{project.RelatedProject.Projects.map((relatedProject) => {
					return (
						<img
							src={relatedProject.img}
							className="rounded-xl cursor-pointer"
							alt={relatedProject.title}
							key={relatedProject.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
