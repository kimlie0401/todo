import React from "react";
import "./Form.css";

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      <input
        placeholder="Todo"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div className="create-button" onClick={onCreate}>
        Add
      </div>
    </div>
  );
};

export default Form;
