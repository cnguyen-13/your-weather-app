import React from "react"
import NavBarSearchBar from "./NavBarSearchBar"
import NavBarMeasurementSwitch from "./NavBarMeasurementSwitch"

interface Props {
	breakpointClass: string
}

function NavBarSearchSettings(props: Props) {
	const { breakpointClass } = props
	const maxWidthCentered =
		breakpointClass === "before-tablet" ? "max-width-centered" : null

	return (
		<div
			className={`search-settings full-width transition-time bg-color-white ${breakpointClass}`}
		>
			<div className={`search-settings-content ${maxWidthCentered}`}>
				<NavBarMeasurementSwitch />
				<NavBarSearchBar />
			</div>
		</div>
	)
}

export default NavBarSearchSettings
