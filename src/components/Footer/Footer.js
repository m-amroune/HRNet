import React from "react";
import style from "./style.module.css";

// Component to display footer

const Footer = () => {
  return (
    <footer>
      <p className={style["paragraphe-footer"]}>
        © 2023 HRnet. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
