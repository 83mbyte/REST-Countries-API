
import React, { useEffect, useState } from 'react';
import { ThemeContext, themes } from './context/ThemeContext';

const ThemeWrapper = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = (theme) => {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.dark:
                if (document.body.classList.contains('light-content')) {
                    document.body.classList.remove('light-content');
                }
                document.body.classList.add('dark-content');
                break;
            case themes.light:
                if (document.body.classList.contains('dark-content')) {
                    document.body.classList.remove('dark-content');
                }
                document.body.classList.add('light-content');
                break;
            default:
                document.body.classList.add('light-content');
                break;
        }

    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider >
    );
};

export default ThemeWrapper;