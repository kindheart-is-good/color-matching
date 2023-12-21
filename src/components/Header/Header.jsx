import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <div className={styles.header}>
            <div className={styles.headerMenuItem}>
                <NavLink to="/colors" className={ navData => navData.isActive ? styles.active : styles.headerMenuItem }>
                    Colors page
                </NavLink>
            </div>
            <div className={styles.headerMenuItem}>
                <NavLink to="/rgb" className={ navData => navData.isActive ? styles.active : styles.headerMenuItem }>
                    Go to RGB page
                </NavLink>
            </div>
            <div className={styles.headerMenuItem}>
                <NavLink to="/cmyk" className={ navData => navData.isActive ? styles.active : styles.headerMenuItem }>
                    Go to CMYK page
                </NavLink>
            </div>
        </div>
    )
}

export default Header;