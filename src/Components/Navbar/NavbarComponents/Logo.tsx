import React from "react"
import logo from "../../../images/misc/logo.png"

function Logo() {
	return (
		<div className="nav-bar-logo">
			<img src={logo} alt="Your Weather App Logo" className="logo-img" />
		</div>
	)
}

export default Logo
