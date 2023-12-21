import React, {useCallback, useEffect, useState} from 'react';
import styles from './PageWithColors.module.css';
import axios from "axios";
import ColorItem from "./components-local/ColorItem";

const PageWithColors = (props) => {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        fetchColors();
    }, []);

    const fetchColors = useCallback(async () => {
        const response = await axios.get(
            process.env.REACT_APP_JSON_SERVER_URL + "/colors"
        );
        //console.log(response);
        setColors(response.data);
    }, []);

    const renderedColorItems = colors.map((color) => {
        return <ColorItem key={color.id} color={color} />;
    });

    /*const renderedColorItems = <ColorItem color={colors[0]} />;*/

    /*const handleClick = () => {
        fetchColors();
    }*/

    return (
        <div className={styles.content}>
            <div>number of elements in cards array is: {colors.length}</div>
            <div className={styles.section}>
                <h1>section title</h1>
                <div>{renderedColorItems}</div>

                {/*<ColorItem color={colors[0]} />*/}
                {/*<button onClick={handleClick}>Debug button</button>*/}
            </div>
        </div>
    )
}

export default PageWithColors;