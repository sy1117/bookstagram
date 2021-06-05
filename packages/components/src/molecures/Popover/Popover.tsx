import React from "react";
import styles from "./Popover.module.scss";

export interface IProps {}

export const Popover: React.FC<IProps> = ({ children }) => {
  return (
    // <div className={styles.root}>
    //   <div className={styles.popover}>{children}</div>
    // </div>
    <div>{children}</div>
  );
};

export default Popover;
