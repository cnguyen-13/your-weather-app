import React from "react";
import Logo from "./NavbarComponents/Logo";
import Searchbar from "./NavbarComponents/Searchbar";
import MeasurementSystemSwitch from './NavbarComponents/MSystemSwitch';

function Navbar() {
    const styles = {
        display: 'flex',
        flexWrap: 'wrap'
    }

    return (
        <nav className="nav-bar">
            <Logo />
            <div className="search-settings">
                <MeasurementSystemSwitch />
                <Searchbar />
            </div>
        </nav>
    );
}

export default Navbar;
