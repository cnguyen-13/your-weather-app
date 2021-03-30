import React from "react"

interface Props {
	inputChange(e: React.ChangeEvent<HTMLInputElement>): void
	city: string
}

function NavBarUserInputField(props: Props) {
	const { inputChange, city } = props

	//Simulates Clicking on the search button when hitting 'enter' in search box
	function onEnterKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void {
		const searchButton: any = document.querySelector("#search-btn")
		if (e.key === "Enter") {
			searchButton.click()
		}
	}

	return (
		<input
			onChange={inputChange}
			onKeyPress={onEnterKeyPress}
			className="nav-bar-input"
			type="text"
			value={city}
			placeholder="[city] or [city, country code]"
		/>
	)
}

export default NavBarUserInputField
