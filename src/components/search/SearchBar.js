import { useState, useEffect, useRef } from 'react';
import useTheme from "../../context/useTheme";
import useSuggest from './hook/useSuggest';

export default function SearchBar({ onChange }) {

    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const wrapperRef = useRef(null);

    const [theme] = useTheme();
    const classNameForm = 'searchForm-' + theme;
    const classNameButton = 'button-' + theme;
    const classNameSuggestList = 'suggestList-' + theme;

    const suggest = useSuggest(inputValue);

    function handleKeyDown(event) {

        if (!isOpen || suggest.length === 0) return;

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                setFocusedIndex((prevIndex) => prevIndex < suggest.length - 1 ? prevIndex + 1 : 0);
                break;
            case 'ArrowUp':
                event.preventDefault();
                setFocusedIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : suggest.length - 1);
                break;
            case 'Enter':
                if (focusedIndex === -1) break;
                event.preventDefault();
                setInputValue(suggest[focusedIndex]);
                onChange(suggest[focusedIndex]);
                setIsOpen(false);
                break;
            case 'Escape':
                setIsOpen(false);
                break;
            default:
                return;
        }

    }

    useEffect(() => {

        function handleClickOutside(event) {
            if (!wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    useEffect(() => {
        setFocusedIndex(-1);
    }, [isOpen]);

    return (
        <form
            className={`searchForm ${classNameForm}`}
            onSubmit={(e) => {
                e.preventDefault();
                onChange(inputValue);
            }}>
            <div ref={wrapperRef} onKeyDown={handleKeyDown}>
                <label>
                    Поиск:
                    <input
                        type="search"
                        name="searchCity"
                        placeholder="Введите название города"
                        required
                        autoComplete="off"
                        value={inputValue}
                        onChange={(event) => {
                            setInputValue(event.target.value)
                            setIsOpen(true);
                        }}
                        onFocus={() => setIsOpen(true)}
                    >
                    </input>
                </label>
                {isOpen && suggest.length > 0 && (
                    <ul className='suggest'>
                        {suggest.map((item, index) => {

                            const isCurrent = index === focusedIndex;

                            return (
                                <li
                                    className={`suggestList ${classNameSuggestList} ${isCurrent ? 'active' : ''} `}
                                    key={index}
                                    onClick={() => {
                                        setInputValue(item);
                                        onChange(item);
                                        setIsOpen(false);
                                    }}
                                    onMouseEnter={() => setFocusedIndex(index)}
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            <button type="button" className={`${classNameButton}`} onClick={() => onChange(inputValue)}>Найти</button>
        </form>
    )
}

