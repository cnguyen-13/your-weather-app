import React from "react"
import NavBarSearchBar from "./NavBarSearchBar"
import NavBarMeasurementSwitch from "./NavBarMeasurementSwitch"

interface Props {
	breakpointClass?: string
}

function NavBarSearchSettings(props: Props) {
	const { breakpointClass } = props
	const maxWidthCentered = breakpointClass ? "max-width-centered" : null

	return (
		<div
			className={`search-settings nav-flex-layout d-flex-jc-end full-width transition-time bg-color-white ${breakpointClass}`}
		>
			<div
				className={`nav-flex-layout flex-d-col-mobile flex-d-row-tablet ${maxWidthCentered}`}
			>
				<NavBarMeasurementSwitch />
				<NavBarSearchBar />
			</div>
		</div>
	)
}

export default NavBarSearchSettings
