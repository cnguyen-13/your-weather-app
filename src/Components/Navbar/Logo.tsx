import React from "react";
import logo from "../../images/misc/logo.png";

function Logo() {
    return (
        <div className="nav-bar-logo">
            <img src={logo} alt="Your Weather App Logo" />{" "}
            <span>Your Weather App</span>
        </div>
    );
}

export default Logo;
