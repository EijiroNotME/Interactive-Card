import React from "react";

const DateInput = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="uppercase tracking-wider text-sm text-accent font-semibold">
        {props.text}
      </p>
      {/* <div class="m-0 p-0.5 rounded-md w-full bg-gradient-to-r from-custom-0 to-custom-100"> */}
      <div className="flex flex-row gap-1">
        <input
          className="input"
          type="text"
          placeholder={props.monthPlaceholder}
          value={props.monthValue}
          onChange={props.monthOnChange}
        />
        <input
          className="input"
          type="text"
          placeholder={props.yearPlaceholder}
          value={props.yearValue}
          onChange={props.yearOnChange}
        />
      </div>
      <p className="error-msg">{props.indicator}</p>
    </div>
  );
};

export default DateInput;
