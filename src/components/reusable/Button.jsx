function Button({ title, type = "button", ariaLabel, icon, disabled = false }) {
  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-[#061018] transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      <span>{title}</span>
      {icon ? <span className="text-base">{icon}</span> : null}
    </button>
  );
}

export default Button;
