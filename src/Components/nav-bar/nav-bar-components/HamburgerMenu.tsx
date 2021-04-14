import React from "react"
import { toggleNavActive } from "../../../functions/nav-bar/nav-active-toggles"
import hamburgerMenu from "../../../images/nav-bar/hamburger-menu.svg"

function HamburgerMenu() {
	return (
		<img
			className="hamburger-menu clickable"
			onClick={toggleNavActive}
			src={hamburgerMenu}
			alt=""
		/>
	)
}

export default HamburgerMenu
