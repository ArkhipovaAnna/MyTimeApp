import './assets/styles/style.css';
import ThemeContextProvider from './context/ThemeContextProvider.js'
import ThemeToggle from './context/ThemeToggle.js';
import Data from './features/geo/components/Data.js';


export default function App() {

  return (
    <ThemeContextProvider>
      <ThemeToggle />
      <Data />
    </ ThemeContextProvider >
  )
}