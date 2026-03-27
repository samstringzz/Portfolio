const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
}) => {
  return (
    <div>
      <label
        className="block text-sm font-semibold uppercase tracking-[0.22em] text-stone-700 dark:text-stone-200"
        htmlFor={labelFor}
      >
        {inputLabel}
      </label>
      <input
        className="mt-3 w-full rounded-[20px] border border-stone-300/80 bg-[#fffaf3] px-5 py-4 text-base text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 dark:border-white/10 dark:bg-[#171310] dark:text-stone-100 dark:focus:border-emerald-300"
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required
      />
    </div>
  );
};

export default FormInput;
