import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

export default DatePickerReact;
