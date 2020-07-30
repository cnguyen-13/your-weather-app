import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

function Navbar() {
    return (
        <nav className="nav-bar">
            <Logo />
            <Searchbar />
        </nav>
    );
}

export default Navbar;
