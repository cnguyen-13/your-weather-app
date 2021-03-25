import React from "react"
import Logo from "./nav-bar-components/NavBarLogo"
import SearchBar from "./nav-bar-components/NavBarSearchBar"
import MeasurementSystemSwitch from "./nav-bar-components/NavBarMeasurementSwitch"

function NavBar() {
	return (
		<nav className="nav-bar">
			<Logo />
			<div className="search-settings">
				<MeasurementSystemSwitch />
				<SearchBar />
			</div>
		</nav>
	)
}

export default NavBar
