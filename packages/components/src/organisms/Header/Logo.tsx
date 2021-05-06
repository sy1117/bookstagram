import React from "react";
import styles from "./Header.module.scss";
import logo from "./logo.png";

const Logo = () => (
  <h1 className={styles.logo}>
    <a href="/">
      <img src={logo as any} alt={"Bookstagram"} />
      <div className="sprite_insta_icon"></div>
      <div className="sprite_write_logo"></div>
    </a>
  </h1>
);

export default Logo;
