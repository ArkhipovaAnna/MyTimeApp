import CurrentCity from './CurrentCity.js';
import YandexMap from './YandexMap.js'
import SearchBar from '../../../components/SearchBar.js';
import useTheme from "../../../context/useTheme.js";
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