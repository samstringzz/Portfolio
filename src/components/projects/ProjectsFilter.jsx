const ProjectsFilter = ({ options, setSelectProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="rounded-lg border border-white/15 bg-surface-card px-3 py-2 text-sm text-white outline-none transition focus:border-emerald-400"
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
