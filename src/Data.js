import CurrentCity from './CurrentCity';
import YandexMap from './YandexMap.js'
import SearchBar from './SearchBar.js';
import useTheme from "./useTheme";
import { useState } from 'react';

export default function Data() {

    const [value, setValue] = useState('');

    const [theme] = useTheme();
    const className = 'wrapper-' + theme;

    return (
        <div className={`wrapper ${className}`}>
            <CurrentCity geoObjName={value} />
            <YandexMap geoObjName={value} />
            <SearchBar onChange={setValue} />
        </div>
    )
}