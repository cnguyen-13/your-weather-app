import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

function Searchbar(props: Props) {
    const [input, setInput] = useState<string>("");

    function inputChange(e: any) {
        const input = e.target;
        const value = input.value;
        setInput(value);
    }

    function inputClear(e: any) {
        const button = e.target;
        const navBar = button.parentElement.parentElement;
        const input = navBar.firstChild;
        input.value = "";
    }
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
