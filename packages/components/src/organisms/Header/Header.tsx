import React from "react";
//@ts-ignore
import styles from "./Header.module.scss";
//@ts-ignore
// const logo = require('./logo.png');
import logo from "./logo.png";

interface MenuDataBase {
  path?: string;
  icon: JSX.Element;
}

interface MenuData extends MenuDataBase {
  dropdownMenu?: Array<{ name: string } & Pick<MenuDataBase, "path">>;
}
export interface HeaderProps {
  menus: Array<MenuData>;
}

const Logo = () => (
  <h1 className={styles.logo}>
    <a href="/">
      <img src={logo} alt={"Bookstagram"} />
      <div className="sprite_insta_icon"></div>
      <div className="sprite_write_logo"></div>
    </a>
  </h1>
);

const SearchField = () => (
  <div className={styles.search_box}>
    <input type="text" placeholder="검색" className={styles.search_field} />
    <div className={styles.fake_field}>
      <span className={styles.sprite_small_search_icon}></span>
      <span>검색</span>
    </div>
  </div>
);

const Menus = ({ data }) => (
  <div className={styles.right_icons}>
    {data.map(({ path, icon, dropdownMenu }, idx) => {
      if (!dropdownMenu) {
        return <a href={path}>{icon}</a>;
      }
      return (
        <div className={styles.dropdown}>
          {path && <a href={path}>{icon}</a>}
          {!path && icon}
          <div className={styles.dropdown_content}>
            {dropdownMenu.map(({ path, name }) => (
              <a href={path}>{name}</a>
            ))}
          </div>
        </div>
      );
    })}
  </div>
);

export const Header: React.FC<HeaderProps> = ({ menus }) => {
  return (
    <header className={styles.header}>
      <section className={styles.inner}>
        <Logo />
        <SearchField />
        <Menus data={menus} />
      </section>
    </header>
  );
};

export default Header;
