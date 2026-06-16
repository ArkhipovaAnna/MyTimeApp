import { useState, useEffect } from 'react';

export default function SearchBar({ onChange }) {

    const [inputValue, setInputValue] = useState();

    return (
        <form action="">
            <label>
                Поиск:{' '}
                <input
                    type="search"
                    name="searchCity"
                    placeholder="Введите название города"
                    required
                    onChange={(event) => setInputValue(event.target.value)}
                >
                </input>
            </label>
            <button type="button" onClick={() => onChange(inputValue)}>Найти</button>
        </form>
    )
}