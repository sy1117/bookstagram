import React from "react";
//@ts-ignore
import styles from "./Header.module.scss";
import { IconHome, IconDirect, IconExplore, IconActivity } from "../../atoms/Icon/Icon";
//@ts-ignore
// const logo = require('./logo.png');
import logo from "./logo.png";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <section className={styles.inner}>
                <h1 className={styles.logo}>
                    <img src={logo} alt={"Bookstagram"} />
                    <a href="index.html">
                        <div className="sprite_insta_icon"></div>
                        <div className="sprite_write_logo"></div>
                    </a>
                </h1>
                <div className={styles.search_box}>
                    <input type="text" placeholder="검색" className={styles.search_field} />
                    <div className={styles.fake_field}>
                        <span className={styles.sprite_small_search_icon}></span>
                        <span>검색</span>
                    </div>
                </div>
                <div className={styles.right_icons}>
                    <a href="/"><IconHome /></a>
                    <a href="/new-post"><IconDirect /></a>
                    <a href="/friends"><IconExplore /></a>
                    <a href="profile.html"><IconActivity /></a>
                    <a href="/profile">
                        <span className={styles.profile}>
                            <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/18299059_1885697375019522_327755955154452480_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=1j-0cJUKF_QAX_T1e2a&tp=1&oh=83f9b70f71c780e50125b25109267daf&oe=605F92AB" />
                        </span>
                    </a>
                </div>
            </section>
        </header >
    )
}

export default Header;