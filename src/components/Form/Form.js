import React, { useState } from "react";
import DatePicker from "../DatePicker/DatePicker";
import style from "./style.module.css";
import { departments } from "../../data/departments";
import { states } from "../../data/states";
import Select from "../Select/Select";

const Form = () => {
  const [department, setDepartment] = useState("");
  const [state, setState] = useState("");
  const handleChangeInput = (e, inputName) => {
    inputName(e.target.value);
  };

  const statesArray = states.map((state) => {
    return state.name;
  });

  return (
    <div className={style["form-container"]}>
      <form className={style.form}>
        <div className={style.categories}>
          <label htmlFor="">First Name</label>
          <input type="text" />
        </div>
        <div className={style.categories}>
          <label htmlFor="">Last Name</label>
          <input type="text" />
        </div>
        <div className={style.dates}>
          <div>
            <label htmlFor="">Date of Birth</label>
            <DatePicker />
          </div>
          <div>
            <label htmlFor="">Start Date</label>
            <DatePicker />
          </div>
        </div>
        <fieldset>
          <legend>Address</legend>
          <div className={style.categories}>
            <label htmlFor="">Street</label>
            <input type="text" />
          </div>
          <div className={style.categories}>
            <label htmlFor="">City</label>
            <input type="text" />
          </div>
          <div className={style.categories}>
            <Select
              label="State"
              idHtmlFor="state"
              data={statesArray}
              inputName="state"
              value={state}
              onChange={(e) => handleChangeInput(e, setState)}
            />
          </div>
          <div className={style.categories}>
            <label htmlFor="">Zip Code</label>
            <input type="number" />
          </div>
        </fieldset>
        <div className={style.categories}>
          <Select
            label="Department"
            idHtmlFor="department"
            data={departments}
            inputName="department"
            value={department}
            onChange={(e) => handleChangeInput(e, setDepartment)}
          />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default Form;
