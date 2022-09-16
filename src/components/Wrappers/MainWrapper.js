import React from 'react';
import style from './MainWrapperStyle.module.css';

const MainWrapper = ({ children }) => {
    return (
        <div className={style.container} >
            {children}
        </div>
    );
};

export default MainWrapper;