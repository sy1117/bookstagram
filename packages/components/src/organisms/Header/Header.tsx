import React from "react";
import Input from "../../atoms/Input/Input";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import Menu from "./Menu";

export type MenuType =
  | "home"
  | "direct"
  | "explore"
  | "heart"
  | "profile"
  | "logout";
export interface HeaderProps {
  profileImageURL: string;
  onMenuClick?: (menuKey: MenuType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onMenuClick,
  profileImageURL,
}) => {
  return (
    <header className={styles.header}>
      <section className={styles.inner}>
        <Logo />
        <div className={styles.search_field}>
          <Input type="search" />
        </div>
        <Menu onMenuClick={onMenuClick} profileImageURL={profileImageURL} />
      </section>
    </header>
  );
};

export default Header;
