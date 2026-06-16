import './style.css';
import CurrentCity from './CurrentCity';
import YandexMap from './YandexMap.js'
import SearchBar from './SearchBar.js';
import { useState, useEffect } from 'react';


export default function App() {
  const [value, setValue] = useState('');

  return (
    <div className="wrapper">
      <CurrentCity geoObjName={value} />
      <YandexMap geoObjName={value} />
      <SearchBar onChange={setValue} />
    </div>
  )
}