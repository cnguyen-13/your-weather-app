import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import UnitSwitch from "./UnitSwitch";

interface Props {
    units: string;
    changeUnitsFunc: any;
}

function Navbar(props: Props) {
    const { units, changeUnitsFunc } = props;

    return (
        <nav className="nav-bar">
            <Logo />
            <Searchbar />
            {/* <UnitSwitch units={units} changeUnitsFunc={changeUnitsFunc} /> */}
        </nav>
    );
}

export default Navbar;
