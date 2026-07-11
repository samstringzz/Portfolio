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
        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        htmlFor={labelFor}
      >
        {inputLabel}
      </label>
      <input
        className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-600 dark:border-gray-600 dark:bg-ternary-dark dark:text-white dark:focus:border-emerald-400"
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
