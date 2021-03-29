import React from "react"
import NavBarSearchBar from "./NavBarSearchBar"
import NavBarMeasurementSwitch from "./NavBarMeasurementSwitch"

interface Props {
	isActive: boolean
}

function NavBarSearchSettings(props: Props) {
	const { isActive } = props
	const activeClass = isActive ? "search-settings-active" : null
	return (
		<div className={`search-settings ${activeClass}`}>
			<NavBarMeasurementSwitch />
			<NavBarSearchBar />
		</div>
	)
}

export default NavBarSearchSettings
