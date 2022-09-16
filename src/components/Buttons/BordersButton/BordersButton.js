import React from 'react';
import { Link } from 'react-router-dom';

import style from './BordersButtonStyle.module.css';

const BordersButton = ({ darkMode, text, cca3 }) => {

    return (
        <div className={style.container}
            style={{
                boxShadow: darkMode && 'none',
                backgroundColor: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
            }}
        >
            <div style={{ alignItems: 'center', display: 'flex', padding: 0 }}>

                <Link to={`/details/${cca3}`} className={style.btnText}>{text}</Link>

            </div>
        </div>
    );
};

export default BordersButton;