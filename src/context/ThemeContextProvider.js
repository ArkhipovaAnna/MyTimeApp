import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext value={{ theme, setTheme }}>
            {children}
        </ThemeContext>
    )
}