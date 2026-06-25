import { useState, useEffect } from 'react';
import useTheme from "../context/useTheme";

export default function SearchBar({ onChange }) {

    const [inputValue, setInputValue] = useState();

    const [theme] = useTheme();
    const classNameForm = 'searchForm-' + theme;
    const classNameButton = 'button-' + theme;

    return (
        <form className={`searchForm ${classNameForm}`} onSubmit={(e) => {
            e.preventDefault();
            onChange(inputValue);
        }}>
            <label>
                Поиск:
                <input
                    type="search"
                    name="searchCity"
                    placeholder="Введите название города"
                    required
                    onChange={(event) => setInputValue(event.target.value)}
                >
                </input>
            </label>
            <button type="button" className={`${classNameButton}`} onClick={() => onChange(inputValue)}>Найти</button>
        </form>
    )
}