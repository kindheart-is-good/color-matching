import React from 'react';
import styles from './PageCMYK.module.css';

const PageCMYK = (props) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.first}>first</div>
            <div className={styles.second}>second</div>
            <div className={styles.third}>third</div>
        </div>
    )
}

export default PageCMYK;