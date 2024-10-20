import React from "react";

const DefaultInput = ({
  text,
  value,
  placeholder,
  indicator,
  onChange,
  makeUpper,
}) => {
  const hasError = Boolean(indicator);
  return (
    <div className="flex flex-col gap-1">
      <p className="uppercase tracking-wider text-sm text-accent font-semibold">
        {text}
      </p>
      {/* <div class="m-0 p-0.5 rounded-md w-full bg-gradient-to-r from-custom-0 to-custom-100"> */}
      <input
        className={`input ${
          hasError ? "border-error border-[1px]" : ""
        } ${makeUpper}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p className="error-msg">{indicator}</p>
    </div>
    // </div>
  );
};

export default DefaultInput;
