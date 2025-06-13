import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = ({ project }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{project.ProjectImages.map((image) => {
				return (
					<div className="mb-10 sm:mb-0" key={image.id}>
						<img
							src={image.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={image.title}
							key={image.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
