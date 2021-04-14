import React, { useState, useEffect } from "react"
import { toggleNavActive } from "../../../functions/nav-bar/nav-active-toggles"
import hamburgerMenu from "../../../images/nav-bar/hamburger-menu.svg"
import cancelMenu from "../../../images/nav-bar/cancel.svg"

function HamburgerMenu() {
	const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

	function menuInactive() {
		setIsMenuActive(false)
	}

	useEffect(() => {
		window.addEventListener("resize", menuInactive)

		return (): void => window.removeEventListener("resize", menuInactive)
	}, [])

	function onClickHandler(): void {
		toggleNavActive()
		setIsMenuActive(!isMenuActive)
	}

	return (
		<img
			className="hamburger-menu clickable"
			onClick={onClickHandler}
			src={isMenuActive ? cancelMenu : hamburgerMenu}
			alt=""
		/>
	)
}

export default HamburgerMenu
