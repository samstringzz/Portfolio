const selectOptions = [
	'Web Application',
	'Mobile Application',
	'E-commerce',
	'UI/UX Design',
	'Full Stack',
];

const ProjectsFilter = ({ setSelectProject }) => {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="font-general-medium px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-sm sm:text-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors shadow-sm cursor-pointer hover:border-blue-400 dark:hover:border-blue-500"
		>
			<option value={setSelectProject} className="text-sm sm:text-md">
				All Projects
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
