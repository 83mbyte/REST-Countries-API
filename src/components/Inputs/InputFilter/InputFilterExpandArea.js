import React from 'react';
import style from './InputFilterStyle.module.css';

const InputFilterExpandArea = ({ show, darkMode, children }) => {
    return (
        <>
            {
                show ?
                    <div className={style.expandArea}
                        style={{
                            boxShadow: darkMode && 'none',
                            backgroundColor: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
                        }}
                    >
                        {children}
                    </div >
                    : ''
            }
        </>
    );
};

export default InputFilterExpandArea;