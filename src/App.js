import './style.css';
import ThemeContextProvider from './ThemeContextProvider.js';
import ThemeToggle from './ThemeToggle.js';
import Data from './Data.js';


export default function App() {

  return (
    <ThemeContextProvider>
      <ThemeToggle />
      <Data />
    </ ThemeContextProvider >
  )
}