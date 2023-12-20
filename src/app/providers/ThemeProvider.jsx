"use client";

import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const ThemeProvider = ({children}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={theme}>
            {theme}
            {children}
        </div>
    )
}

export default ThemeProvider;