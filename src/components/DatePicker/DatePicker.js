import React, { useState } from "react";

const DatePicker = () => {
  const [date, setDate] = useState();
  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
