import React from "react";

const input = ({ name, lable, onChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default input;
