import React from "react";

const CvcInput = ({ value, placeholder, text, indicator, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="uppercase tracking-wider text-sm text-accent font-semibold">
        {text}
      </p>
      {/* <div class="m-0 p-0.5 rounded-md w-full bg-gradient-to-r from-custom-0 to-custom-100"> */}
      <input
        className="p-2 w-full rounded-md focus:outline-none border-2 border-accent-LIGHT/40"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p className="error-msg hidden">{indicator}</p>
    </div>
  );
};

export default CvcInput;
