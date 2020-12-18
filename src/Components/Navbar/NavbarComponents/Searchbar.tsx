import React, { useState } from "react";
import SearchBtn from './SearchBtn';

function Searchbar() {
    const [city, setCity] = useState<string>("");

    const inputChange = (e: any): void => {
        const { value } = e.target;
        setCity(value);
    };

    const clearInput = (): void => {
        setCity('');
    };

    const onEnterPress = (e: any): void => {
        if (e.key === 'Enter') {
            const searchBtn = e.target.nextElementSibling;
            searchBtn.click();
            clearInput();
        }
    }

    return (
        <div className="nav-bar-search">
            <input
                onChange={inputChange}
                onKeyPress={onEnterPress}
                className="nav-bar-input"
                type="text"
                value={city}
                placeholder="[city] or [city, country code]"
            />
            <SearchBtn city={city} clearInput={clearInput} />
        </div>
    );
}

export default Searchbar;
