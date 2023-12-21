import React from 'react';
import styles from './ColorItem.module.css';

const ColorItem = ({ color }) => {

    return (
        <div className={styles.item}>
            <span className={styles.colorCode}>color code:</span>
            <span className={styles.hexadecimalValue}>{color.hexadecimalValue}</span>
            <span className={styles.colorShow}></span>
        </div>
    )
}

export default ColorItem;