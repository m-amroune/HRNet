import React from "react";
import style from "./style.module.css";
import Button from "../Button/Button";

// Modal component to display validation confirmation message

const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    isOpen && (
      <div className={style.overlay}>
        <div className={style.modal}>
          <div className={style["modal-button"]}>
            <Button variant="close" onClick={() => setIsOpen(false)}>
              X
            </Button>
          </div>
          <div className={style["modal-content"]}>{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
