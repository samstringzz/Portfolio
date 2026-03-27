function Button({ title, type = "button", ariaLabel, icon }) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-50 transition hover:-translate-y-0.5 hover:bg-emerald-700 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-emerald-300"
    >
      <span>{title}</span>
      {icon ? <span className="text-base">{icon}</span> : null}
    </button>
  );
}

export default Button;
