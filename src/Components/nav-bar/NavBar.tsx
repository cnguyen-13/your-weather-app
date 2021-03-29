import React, { useState } from "react"
import NavBarLogo from "./nav-bar-components/NavBarLogo"
import NavBarHamburgerMenu from "./nav-bar-components/NavBarHamburgerMenu"
import NavBarSearchSettings from "./nav-bar-components/NavBarSearchSettings"

function NavBar() {
	const [isNavSettingsActive, setIsNavSettingsActive] = useState<boolean>(false)

	function onClickHamburger(): void {
		setIsNavSettingsActive(!isNavSettingsActive)
	}

	return (
		<nav className="nav-bar">
			<NavBarLogo />
			<NavBarHamburgerMenu onClickHamburger={onClickHamburger} />
			<NavBarSearchSettings isActive={isNavSettingsActive} />
		</nav>
	)
}

export default NavBar
