"use client";

import { Underdog } from "next/font/google";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if(typeof window !== 'undefined') {
        const value = localStorage.getItem('theme');
        return value || 'light';
    }
}

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    
    return (
        <ThemeContext.Provider value={{theme}}>
            {children}
        </ThemeContext.Provider>
    )
}