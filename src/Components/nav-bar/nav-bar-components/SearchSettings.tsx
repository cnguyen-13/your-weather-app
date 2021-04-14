import React from "react"
import SearchBar from "./search-settings-components/SearchBar"
import MeasurementSwitch from "./search-settings-components/MeasurementSwitch"

interface Props {
	breakpointClass?: string
}

function SearchSettings(props: Props) {
	const { breakpointClass } = props
	const maxWidthCentered = breakpointClass ? "max-width-centered" : null

	return (
		<div
			className={`search-settings nav-flex-layout d-flex-jc-end full-width transition-time bg-color-white ${breakpointClass}`}
		>
			<div
				className={`nav-flex-layout flex-d-col-mobile flex-d-row-tablet ${maxWidthCentered}`}
			>
				<MeasurementSwitch />
				<SearchBar />
			</div>
		</div>
	)
}

export default SearchSettings
