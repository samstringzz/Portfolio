import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
	const [projects] = useState(projectsData);
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');
	const [activeType, setActiveType] = useState('All');

	const byType = activeType === 'All'
		? projects
		: projects.filter((p) => p.type === activeType);

	const searchProjectsByTitle = byType.filter((item) =>
		item.title.toLowerCase().includes(searchProject.toLowerCase()) || searchProject === ''
	);

	const selectProjectsByCategory = byType.filter((item) => {
		let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectProject);
	});

	const visibleProjects = selectProject
		? selectProjectsByCategory
		: searchProject
		? searchProjectsByTitle
		: byType;

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
				activeType,
				setActiveType,
				visibleProjects,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
