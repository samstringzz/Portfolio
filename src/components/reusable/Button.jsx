function Button({ title, type = "button", ariaLabel, icon }) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-[#061018] transition hover:bg-emerald-300 sm:w-auto"
    >
      <span>{title}</span>
      {icon ? <span className="text-base">{icon}</span> : null}
    </button>
  );
}

export default Button;
