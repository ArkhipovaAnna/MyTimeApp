import { useState } from "react";

export default function SearchBar() {

    const [value, setValue] = useState();

    function handlerChange(event) {
        setValue(event.target.value);
    }

    function handlerClick(event) {
        alert('done');
    }

    // console.log(value);

    return (
        <form action="">
            <label>
                Поиск:{' '}
                <input
                    type="search"
                    name="searchCity"
                    placeholder="Введите название города"
                    required
                    onChange={handlerChange}>
                </input>
            </label>
            <button type="button" onClick={handlerClick}>Найти</button>
        </form>
    )
}