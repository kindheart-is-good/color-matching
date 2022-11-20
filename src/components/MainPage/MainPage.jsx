import React from 'react';
import styles from './MainPage.module.css';

const MainPage = (props) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>top</div>
            <div className={styles.first}>first</div>
            <div className={styles.second}>second</div>
            <div className={styles.third}>third</div>
            <div className={styles.bot}>bot</div>
        </div>
    )
}

export default MainPage;