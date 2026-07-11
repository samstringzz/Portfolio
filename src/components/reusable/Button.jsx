function Button({ title, type = "button", ariaLabel, icon }) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
    >
      <span>{title}</span>
      {icon ? <span className="text-base">{icon}</span> : null}
    </button>
  );
}

export default Button;
