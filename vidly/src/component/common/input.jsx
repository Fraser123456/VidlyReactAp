import React from "react";

const input = ({ name, lable, onChange, error, value }) => {
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
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default input;
