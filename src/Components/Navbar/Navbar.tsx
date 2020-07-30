import React from "react";
import Logo from "./NavbarComponents/Logo";
import Searchbar from "./NavbarComponents/Searchbar";

function Navbar() {
    return (
        <nav className="nav-bar">
            <Logo />
            <Searchbar />
        </nav>
    );
}

export default Navbar;
