const ProjectsFilter = ({ options, setSelectProject }) => {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="font-general-medium min-w-[220px] rounded-full border border-stone-300/80 bg-white/90 px-5 py-3 text-sm text-stone-900 shadow-[0_12px_30px_rgba(28,25,23,0.08)] outline-none transition focus:border-emerald-600 dark:border-white/10 dark:bg-stone-900/80 dark:text-stone-100 dark:focus:border-emerald-400"
		>
			<option value="" className="text-sm sm:text-md">
				All Projects
			</option>

			{options.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
