import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectGallery from '../components/projects/ProjectGallery';
import { singleProjectData } from '../data/singleProjectData';

const ProjectDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (slug && singleProjectData[slug]) {
      setProject(singleProjectData[slug]);
    } else {
      console.error(`Project with slug '${slug}' not found.`);
    }
  }, [slug]);

  if (!project) {
    return <div>Loading project details...</div>;
  }

  return (
    <SingleProjectProvider>
      <div className="container mx-auto mt-5 sm:mt-10">
        <ProjectHeader project={project} />
        <ProjectGallery project={project} />
        <ProjectInfo project={project} />
      </div>
    </SingleProjectProvider>
  );
};

export default ProjectDetails;
