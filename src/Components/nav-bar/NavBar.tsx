import React, { useEffect } from "react"
import NavBarLogo from "./nav-bar-components/NavBarLogo"
import NavBarHamburgerMenu from "./nav-bar-components/NavBarHamburgerMenu"
import NavBarSearchSettings from "./nav-bar-components/NavBarSearchSettings"
import {
	toggleNavActive,
	removeNavActive,
} from "../../functions/nav-bar/nav-active-toggles"

function NavBar() {
	useEffect(() => {
		//On resize
		window.addEventListener("resize", removeNavActive)

		return () => {
			window.removeEventListener("resize", removeNavActive)
		}
	}, [])

	function onClickHamburger(): void {
		toggleNavActive()
	}

	return (
		<nav className="nav-bar dimen-nav-bar b-bottom-primary p-relative highest-z-index bg-color-white text-color-off-black">
			<div className="nav-bar-content dimen-nav-bar max-width-centered">
				<NavBarLogo />
				<NavBarHamburgerMenu onClickHamburger={onClickHamburger} />
				<NavBarSearchSettings breakpointClass="after-tablet" />
			</div>
			<NavBarSearchSettings breakpointClass="before-tablet" />
		</nav>
	)
}

export default NavBar
