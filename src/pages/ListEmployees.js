import React from "react";
// import { EmployeesListContext } from "../context/EmployeesListContext";
import { EmployeesTable } from "m-a_plugin_table";

// const { listEmployees } = useContext(EmployeesListContext);

let userLocalStorage = localStorage.getItem("employee");
if (userLocalStorage === null) {
  console.log("no employee on the list");
} else {
  userLocalStorage = JSON.parse(userLocalStorage);
}

const rows = userLocalStorage;

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

const ListEmployees = () => {
  return (
    <div>
      <EmployeesTable headColumns={headColumns} rows={rows} />
    </div>
  );
};

export default ListEmployees;
