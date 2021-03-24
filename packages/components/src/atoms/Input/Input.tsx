import React from "react";
//@ts-ignore
import styles from "./Input.module.scss";

const Input: React.FC = (props) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
