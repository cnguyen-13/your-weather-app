import React, { useState } from "react";
import { Link } from "react-router-dom";

function Searchbar() {
    const [input, setInput] = useState<string>("");

    const inputChange = (e: any): void => {
        const input = e.target;
        const value = input.value;
        setInput(value);
    };

    const inputClear = (e: any): void => {
        const button = e.target;
        const navBar = button.parentElement.parentElement;
        const input = navBar.firstChild;
        input.value = "";
    };
    return (
        <div className="nav-bar-search">
            <input
                onChange={inputChange}
                className="nav-bar-input"
                type="text"
                placeholder="[city] or [city, country code]"
            />
            <Link to={`/${input}`}>
                <button onClick={inputClear} className="nav-bar-btn">
                    Search
                </button>
            </Link>
        </div>
    );
}

export default Searchbar;
