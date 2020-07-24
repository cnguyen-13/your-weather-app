import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

interface Props {}

function Navbar(props: Props) {
    const {} = props;

    return (
        <nav className="nav-bar">
            <Logo />
            <Searchbar />
        </nav>
    );
}

export default Navbar;
