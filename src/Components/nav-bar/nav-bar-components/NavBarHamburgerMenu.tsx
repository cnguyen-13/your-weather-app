import React from "react"
import hamburgerMenu from "../../../images/nav-bar/hamburger-menu.svg"
interface Props {
	onClickHamburger: () => void
}
function NavBarHamburgerMenu(props: Props) {
	const { onClickHamburger } = props

	return (
		<img
			className="hamburger-menu clickable"
			onClick={onClickHamburger}
			src={hamburgerMenu}
			alt=""
		/>
	)
}

export default NavBarHamburgerMenu
