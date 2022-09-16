import React from 'react';
import { Link } from 'react-router-dom';
import style from './ButtonStyle.module.css';

const Button = ({ darkMode }) => {
    return (
        <div className={style.container}
            style={{
                boxShadow: darkMode && 'none',
                backgroundColor: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
            }}
        >
            <div style={{ alignItems: 'center', display: 'flex', padding: 0 }}>
                <ion-icon name="chevron-back-outline" ></ion-icon>
                <Link to="/" className={style.btnText}>Back</Link>
            </div>
        </div>

    );
};

export default Button;