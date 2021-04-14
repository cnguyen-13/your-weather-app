import React, { useEffect } from "react"
import Logo from "./nav-bar-components/Logo"
import HamburgerMenu from "./nav-bar-components/HamburgerMenu"
import SearchSettings from "./nav-bar-components/SearchSettings"
import { removeNavActive } from "../../functions/nav-bar/nav-active-toggles"

function NavBar() {
	useEffect(() => {
		//On resize
		window.addEventListener("resize", removeNavActive)

		return (): void => {
			window.removeEventListener("resize", removeNavActive)
		}
	}, [])

	return (
		<nav className="dimen-nav-bar b-bottom-primary p-relative highest-z-index bg-color-white text-color-off-black">
			<div className="nav-flex-layout dimen-nav-bar max-width-centered">
				<Logo />
				<HamburgerMenu />
				<SearchSettings />
			</div>
			<SearchSettings breakpointClass="before-tablet" />
		</nav>
	)
}

export default NavBar
