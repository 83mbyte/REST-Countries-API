import React from 'react';
import MainWrapper from '../Wrappers/MainWrapper';
import style from './NavBarStyle.module.css';

const NavBarComponent = ({ theme }) => {

    const { toggleTheme, darkMode, setDarkMode, themes } = theme;

    const changeThemeHandler = () => {
        setDarkMode(!darkMode);
        toggleTheme(darkMode ? themes.light : themes.dark);
    }
    return (
        <>
            <div
                className={style.container}
                style={{
                    boxShadow: !darkMode ? '0 1px 15px #dedede' : 'none',
                    backgroundColor: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
                }}
            >

                <MainWrapper>

                    <div className={style.flexRowContainer}>

                        <div className={style.logoContainer}>
                            <p>Where in the world?</p>
                        </div>

                        <div className={style.themeSwitch} >
                            <ion-icon name={darkMode ? 'sunny' : 'moon'} size='small'></ion-icon>
                            <p onClick={changeThemeHandler}>{darkMode ? 'Light Mode' : 'Dark Mode'}</p>
                        </div>
                    </div>

                </MainWrapper >
            </div >
        </>);
};

export default NavBarComponent;