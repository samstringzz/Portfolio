import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { singleProjectData } from '../data/singleProjectData';

const ProjectDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (slug && singleProjectData[slug]) {
      setProject(singleProjectData[slug]);
    } else {
      // Handle case where project is not found (e.g., redirect to 404 or projects page)
      console.error(`Project with slug '${slug}' not found.`);
    }
  }, [slug]);

  if (!project) {
    return <div>Loading project details...</div>; // Or a custom loading component/message
  }

  // Temporarily set the singleProjectData in context for the child components
  // This is a workaround as SingleProjectProvider expects a different structure
  // A better approach would be to refactor SingleProjectContext to pass a specific project
  // rather than managing a single state for all project details.

  // For now, we'll pass the fetched project data directly to the components.
  return (
    <SingleProjectProvider>
      <div className="container mx-auto mt-5 sm:mt-10">
        <ProjectHeader project={project} />
        <ProjectGallery project={project} />
        <ProjectInfo project={project} />
        <ProjectRelatedProjects project={project} />
      </div>
    </SingleProjectProvider>
  );
};

export default ProjectDetails; 