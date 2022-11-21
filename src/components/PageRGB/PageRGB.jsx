import React from 'react';
import styles from './PageRGB.module.css';

const PageRGB = (props) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.first}>red</div>
            <div className={styles.second}>green</div>
            <div className={styles.third}>blue</div>
        </div>
    )
}

export default PageRGB;