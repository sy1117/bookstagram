import React, { MouseEventHandler } from "react";
import styles from "./Header.module.scss";
import {
  IconActivity,
  IconDirect,
  IconExplore,
  IconHome,
} from "../../atoms/Icon/Icon";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import { useState } from "react";
import { MenuType } from "./Header";

interface MenuDataBase<T> {
  icon: JSX.Element;
  key: T;
  title?: string;
}

interface MenuData<T> extends MenuDataBase<T> {
  dropdownMenu?: Array<MenuDataBase<T>>;
}

const MenuItem: React.FC<any> = ({
  icon,
  dropdownMenu,
  menuKey,
  onMenuClick,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const toggledropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const menuClickHandler: MouseEventHandler<HTMLAnchorElement> = (e) => {
    const dataKey = (e.currentTarget as HTMLElement).dataset?.key;
    if (onMenuClick) {
      onMenuClick(dataKey);
    }
    if ((e.currentTarget as HTMLElement).dataset.role === "dropdownmenu") {
      toggledropdown();
      return;
    }
    const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
    if (nextSibling && nextSibling?.dataset.role === "dropdown") {
      toggledropdown();
    }
  };
  const blurHandler = (e) => {
    if (!e.currentTarget.nextElementSibling) {
      setDropdownVisible(false);
    }
  };
  return (
    <div className={styles.dropdown}>
      <a
        tabIndex={1}
        onClick={menuClickHandler}
        data-key={menuKey}
        onBlur={blurHandler}
      >
        {icon}
      </a>
      <div
        className={styles.dropdown_content}
        data-role={"dropdown"}
        style={{ display: dropdownVisible ? "block" : "none" }}
      >
        {Array.isArray(dropdownMenu)
          ? dropdownMenu.map(({ key: dropdownMenuKey, title }, idx) => (
              <a
                tabIndex={1}
                onClick={menuClickHandler}
                data-role={"dropdownmenu"}
                data-key={dropdownMenuKey}
                key={idx}
              >
                {title}
              </a>
            ))
          : dropdownMenu}
      </div>
    </div>
  );
};

export interface MenuProps {
  onMenuClick: (menu: MenuType) => void;
  profileImageURL: string;
}

const Menu: React.FC<MenuProps> = ({ onMenuClick, profileImageURL }) => {
  const menus: Array<MenuData<MenuType>> = [
    { icon: <IconHome />, key: "home" },
    { icon: <IconDirect />, key: "direct" },
    { icon: <IconExplore />, key: "explore" },
    {
      icon: <IconActivity />,
      key: "heart",
    },
    {
      icon: <ProfileImage url={profileImageURL} size="small" />,
      key: "profile",
      // dropdownMenu: [
      //   {
      //     key: "logout",
      //     icon: <IconActivity />,
      //     title: "로그아웃",
      //   },
      // ],
    },
  ];
  const menuClickHandler = (dataKey: MenuType) => {
    if (onMenuClick) onMenuClick(dataKey);
  };

  return (
    <div className={styles.right_icons}>
      {menus?.map(({ icon, dropdownMenu, key }, idx) => {
        return (
          <MenuItem
            icon={icon}
            dropdownMenu={dropdownMenu}
            menuKey={key}
            onMenuClick={menuClickHandler}
          />
        );
      })}
    </div>
  );
};

export default Menu;
