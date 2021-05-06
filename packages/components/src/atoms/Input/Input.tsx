import React from "react";
//@ts-ignore
import styles from "./Input.module.scss";
import SearchInput from "./SearchInput";

export interface InputProps {
  type?: "text" | "search";
}

const Input: React.FC<InputProps> = ({ type = "text", ...props }) => {
  if (type === "search") return <SearchInput {...props} />;
  return <input className={styles.input} {...props} />;
};

export default Input;
