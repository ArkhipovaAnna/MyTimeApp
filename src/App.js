import './style.css';
import CurrentCity from './CurrentCity';
import YandexMap from './YandexMap.js'
import SearchBar from './SearchBar.js';
import useGeocoder from './useGeocoder.js';

export default function App() {
  return (
    <div className="wrapper">
      <CurrentCity />
      <YandexMap />
      <SearchBar />
    </div>
  )
}