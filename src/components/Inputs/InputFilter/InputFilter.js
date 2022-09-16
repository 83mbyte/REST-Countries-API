import React, { Fragment } from 'react';
import InputFilterExpandArea from './InputFilterExpandArea';
import InputFilterItem from './InputFilterItem';
import style from './InputFilterStyle.module.css';

const InputFilter = ({ darkMode, setFilterItem }) => {
    const [show, setShow] = React.useState(false);
    const countries = [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
        'All'
    ]

    const onClickHandler = () => {
        setShow(!show);
    }
    return (
        <Fragment>
            <div className={style.container}
                style={{
                    boxShadow: darkMode && 'none',
                    backgroundColor: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
                }}
            >
                <div className={style.filter} onClick={onClickHandler}>
                    Filter by Region <ion-icon name="chevron-down-outline" style={{ color: '#787878' }}></ion-icon>
                </div>
            </div>
            <InputFilterExpandArea show={show} darkMode={darkMode} >
                {
                    countries.map((item, index) => {
                        return <InputFilterItem item={item} key={index} setFilterItem={setFilterItem} setShow={setShow} />
                    })
                }
            </InputFilterExpandArea>

        </Fragment>
    );
};

export default InputFilter;