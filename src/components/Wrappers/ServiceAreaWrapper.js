import React from 'react';
import style from './ServiceAreaStyle.module.css';

const ServiceAreaWrapper = ({ children }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};

export default ServiceAreaWrapper;