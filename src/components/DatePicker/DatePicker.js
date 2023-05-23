import React from "react";
//component react install via npm
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

const DatePickerReact = ({ selected, onChange }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      showYearDropdown
      showMonthDropdown
      dropdownMode="select"
    />
  );
};

DatePickerReact.propTypes = {
  selected: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DatePickerReact;
