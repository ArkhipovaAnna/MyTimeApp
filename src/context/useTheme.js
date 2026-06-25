import { useContext } from 'react';
import { ThemeContext } from './ThemeContextProvider';

export default function useTheme() {

    const contex = useContext(ThemeContext);

    return [contex.theme, contex.setTheme];
}