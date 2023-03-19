import React from "react";
import { EmployeesTable } from "m-a_plugin_table";

const ListEmployees = () => {
  const headColumns = [
    { title: "First Name", value: "firstName" },
    { title: "Last Name", value: "lastName" },
    { title: "Start Date", value: "startDate" },
    { title: "Department", value: "department" },
    { title: "Date of Birth", value: "dateOFBirth" },
    { title: "Street", value: "street" },
    { title: "City", value: "city" },
    { title: "State", value: "state" },
    { title: "Zip Code", value: "zipCode" },
  ];

  return (
    <div>
      <EmployeesTable headColumns={headColumns} />
    </div>
  );
};

export default ListEmployees;
