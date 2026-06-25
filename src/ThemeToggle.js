import { useEffect } from "react";
import useTheme from "./useTheme";

export default function ThemeToggle() {

    const [theme, setTheme] = useTheme();

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? 'rgb(176, 224, 230)' : 'rgb(48, 62, 63)';
    }, [theme]);

    const toggleTheme = () => {
        setTheme((cur) => cur === 'light' ? 'dark' : 'light');
    }

    // const className = 'button-' + theme;

    // return (
    //     <button className={`buttonToogle ${className}`} onClick={toggleTheme}>{theme === 'light' ? 'Светлая тема' : 'Темная тема'}</button>
    // )

    return (
        <label className="toggle-switch">
            <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <span className="slider"></span>
        </label>
    )

}