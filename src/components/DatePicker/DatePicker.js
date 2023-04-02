import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerReact = ({ selected, onChange, dateFormat = "MM-dd-y" }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      dateFormat={dateFormat}
      showYearDropdown
      showMonthDropdown
      dropdownMode="select"
    />
  );
};

export default DatePickerReact;
