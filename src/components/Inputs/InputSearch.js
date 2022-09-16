import React, { useRef } from 'react';
import style from './InputSearchStyle.module.css';

const InputSearch = ({ darkMode, search }) => {
    const inputRef = useRef(null);
    const onChangeHandler = () => {
        search.setSearchItem(inputRef.current.value)
    }
    return (
        <div className={style.container}
            style={{
                boxShadow: darkMode && 'none',
                backgroundColor: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
            }}
        >
            <ion-icon name="search" style={{ color: '#787878' }}></ion-icon>
            <input
                ref={inputRef}
                type="text"
                name="search"
                value={search.searchItem}
                placeholder="Search for a country.."
                className={style.inputField}
                onChange={onChangeHandler}
            />
        </div >
    );
};

export default InputSearch;