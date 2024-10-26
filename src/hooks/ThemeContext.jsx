import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const getPreferredTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;

        const prefersDarkScheme = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;
        return prefersDarkScheme ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getPreferredTheme());

    useEffect(() => {
        if (theme === 'system') {
            const prefersDarkScheme = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;
            document.documentElement.className = prefersDarkScheme
                ? 'dark'
                : '';
        } else {
            document.documentElement.className = theme; // 'dark' or 'light'
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
