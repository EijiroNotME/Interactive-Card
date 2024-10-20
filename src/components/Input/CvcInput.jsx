import React from "react";

const CvcInput = ({ value, placeholder, text, indicator, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="uppercase tracking-wider text-sm text-accent font-semibold">
        {text}
      </p>
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p className="error-msg">{indicator}</p>
    </div>
  );
};

export default CvcInput;
