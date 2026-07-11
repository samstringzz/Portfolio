const ProjectsFilter = ({ options, setSelectProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-emerald-600 dark:border-gray-600 dark:bg-ternary-dark dark:text-white dark:focus:border-emerald-400"
      aria-label="Filter by category"
    >
      <option value="">All categories</option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ProjectsFilter;
