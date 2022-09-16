import React from 'react';
import style from './LoadingMessageStyle.module.css';

const LoadingMessage = ({ message }) => {
    return (
        <div className={style.warningText}>{message}</div>
    );
};

export default LoadingMessage;