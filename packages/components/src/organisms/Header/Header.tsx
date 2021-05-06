import React from "react";
import Input from "../../atoms/Input/Input";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import Menu from "./Menu";

export interface HeaderProps {
  onMenuClick?: (
    menuKey: "home" | "direct" | "explore" | "heart" | "profile",
  ) => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className={styles.header}>
      <section className={styles.inner}>
        <Logo />
        <div className={styles.search_field}>
          <Input type="search" />
        </div>
        <Menu onMenuClick={onMenuClick} />
      </section>
    </header>
  );
};

export default Header;
