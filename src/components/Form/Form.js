import React, { useState } from "react";
import style from "./style.module.css";
import PropTypes from "prop-types";
// data imports
import { departments } from "../../data/departments";
import { states } from "../../data/states";
// components imports
import Select from "../Select/Select";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import DatePickerReact from "../DatePicker/DatePicker";

// Form component to display create employee form

const Form = ({ variant = "save" }) => {
  const [department, setDepartment] = useState("Alabama");
  const [state, setState] = useState("Sales");
  const [startDate, setStartDate] = useState(new Date());
  const [dateOFBirth, setDateOFBirth] = useState(new Date());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Arrow function to display date format

  const formatDate = (date) => {
    const dateNew = new Date(date);
    const dateISO = dateNew.toISOString().split("T")[0];
    const [year, month, day] = dateISO.split(".");

    return [year, month, day].join("");
  };

  // Arrow function to manage input

  const handleChangeSelect = (e, inputName) => {
    inputName(e.target.value);
  };

  // data from states array
  const statesArray = states.map((state) => {
    return state.name;
  });

  let employee = [];

  employee = {
    firstName: firstName,
    lastName: lastName,
    startDate: formatDate(startDate),
    department: department,
    dateOFBirth: formatDate(dateOFBirth),
    street: street,
    city: city,
    state: state,
    zipCode: zipCode,
  };

  const [employeeInfo, setEmployeeInfo] = useState([{ ...employee }]);
  console.log(employeeInfo);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      firstName.length <= 1 ||
      lastName.length <= 1 ||
      street.length <= 4 ||
      city.length <= 1 ||
      zipCode.length <= 4
    ) {
      setError(true);
      setShowModal(false);
    } else {
      setError(false);
      setShowModal(true);

      let userLocalStorage = localStorage.getItem("employee");
      if (userLocalStorage == null) {
        userLocalStorage = [];
      } else {
        userLocalStorage = JSON.parse(userLocalStorage);
      }

      userLocalStorage.push(employee);
      setEmployeeInfo(employee);
      localStorage.setItem("employee", JSON.stringify(userLocalStorage));
    }
  };

  return (
    <div className={style["form-container"]}>
      <form onSubmit={handleSave} className={style.form}>
        <div className={style.categories}>
          <label>First Name</label>
          <input onChange={(e) => setFirstName(e.target.value)} type="text" />
          {error && firstName.length <= 1 ? (
            <p className={style.errorInput}>
              The value must have at least 2 characters
            </p>
          ) : (
            ""
          )}
        </div>
        <div className={style.categories}>
          <label htmlFor="">Last Name</label>
          <input onChange={(e) => setLastName(e.target.value)} type="text" />
          {error && lastName.length <= 1 ? (
            <p className={style.errorInput}>
              The value must have at least 2 characters
            </p>
          ) : (
            ""
          )}
        </div>
        <div className={style.dates}>
          <div>
            <label htmlFor="">Date of Birth</label>
            <DatePickerReact
              selected={dateOFBirth}
              onChange={(selectedDate) => setDateOFBirth(selectedDate)}
              cd
              h
            />
          </div>
          <div>
            <label htmlFor="">Start Date</label>
            <DatePickerReact
              selected={startDate}
              onChange={(startDate) => setStartDate(startDate)}
            />
          </div>
        </div>
        <fieldset>
          <legend>Address</legend>
          <div className={style.categories}>
            <label htmlFor="">Street</label>
            <input onChange={(e) => setStreet(e.target.value)} type="text" />
            {error && street.length <= 4 ? (
              <p className={style.errorInput}>
                The value must have at least 4 characters
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={style.categories}>
            <label htmlFor="">City</label>
            <input onChange={(e) => setCity(e.target.value)} type="text" />
            {error && city.length <= 1 ? (
              <p className={style.errorInput}>
                The value must have at least 5 characters
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={style.categories}>
            <Select
              label="State"
              idHtmlFor="state"
              data={statesArray}
              inputName="state"
              value={state}
              onChange={(e) => handleChangeSelect(e, setState)}
            />
          </div>
          <div className={style.categories}>
            <label htmlFor="">Zip Code</label>
            <input onChange={(e) => setZipCode(e.target.value)} type="number" />
            {error && street.length <= 4 ? (
              <p className={style.errorInput}>
                The value must have at least 5 characters
              </p>
            ) : (
              ""
            )}
          </div>
        </fieldset>
        <div className={style.categories}>
          <Select
            label="Department"
            idHtmlFor="department"
            data={departments}
            inputName="department"
            value={department}
            onChange={(e) => handleChangeSelect(e, setDepartment)}
          />
        </div>

        <Button
          className={`${style.button} ${style[variant]} `}
          type="submit"
          onclick={handleSave}
        >
          Save
        </Button>
      </form>
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <p>New employee created !</p>
      </Modal>
    </div>
  );
};

Form.propTypes = {
  variant: PropTypes.string,
};

export default Form;
