import React from 'react';
import style from './InputFilterStyle.module.css';

const InputFilterItem = ({ item, setFilterItem, setShow }) => {
    const clickHandler = () => {
        setFilterItem(item !== 'All' ? item : null);
        setShow(false);
    }
    return (
        <div className={style.filterItem}>
            <p onClick={clickHandler}>{item}</p>
        </div>
    );
};

export default InputFilterItem;