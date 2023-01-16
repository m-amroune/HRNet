import React from "react";

const Select = ({ label, idHtmlFor, data, inputName, value, onChange }) => {
  return (
    <>
      <label htmlFor={idHtmlFor}>{label}</label>
      <select
        name={inputName}
        id={idHtmlFor}
        data={data}
        value={value}
        onChange={onChange}
      >
        {data.map((category, index) => {
          return <option key={index}>{category}</option>;
        })}
      </select>
    </>
  );
};

export default Select;
