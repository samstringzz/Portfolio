const formFieldClass =
  "mt-2 w-full rounded-lg border border-white/15 bg-[#061018] px-4 py-3 text-base text-white shadow-sm outline-none ring-0 transition placeholder:text-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30";

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
      <label className="block text-sm font-medium text-gray-200" htmlFor={labelFor}>
        {inputLabel}
      </label>
      <input
        className={formFieldClass}
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
