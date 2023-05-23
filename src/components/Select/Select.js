import React from "react";
import PropTypes from "prop-types";

// Select component to display form select dropdowns

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

Select.propTypes = {
  label: PropTypes.string.isRequired,
  idHtmlFor: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
