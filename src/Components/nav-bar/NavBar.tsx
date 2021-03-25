import React from "react"
import NavBarLogo from "./nav-bar-components/NavBarLogo"
import NavBarSearchBar from "./nav-bar-components/NavBarSearchBar"
import NavBarMeasurementSwitch from "./nav-bar-components/NavBarMeasurementSwitch"

function NavBar() {
	return (
		<nav className="nav-bar">
			<NavBarLogo />
			<div className="search-settings">
				<NavBarMeasurementSwitch />
				<NavBarSearchBar />
			</div>
		</nav>
	)
}

export default NavBar
