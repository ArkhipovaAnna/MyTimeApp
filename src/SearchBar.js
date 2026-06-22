import { useState, useEffect } from 'react';

export default function SearchBar({ onChange }) {

    const [inputValue, setInputValue] = useState();

    return (
        <form className='searchForm' onSubmit={(e) => {
            e.preventDefault();
            onChange(inputValue);
        }}>
            <label className='searchLabel'>
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
            <button type="button" onClick={() => onChange(inputValue)}>Найти</button>
        </form>
    )
}