import React from 'react';
import styles from "./Header.module.css";
// import styles from "./Header.module.scss";

export default () => (
    <header>
        {/* in order to use '.module.css', you need to name className in JavaScript way, not the Html way */}
        <ul className={styles.navList}>
        {/* since '-' means minus in JavaScript, you can not name className with - in it */}
        {/* <ul className={styles["nav-list"]}> */}
            <li>
                <a href="/">Movies</a>
            </li>
            <li>
                <a href="/tv">TV</a>
            </li>
            <li>
                <a href="/search">Search</a>
            </li>
        </ul>
    </header>
)