import React from "react"

interface Props {
	inputChange(e: React.ChangeEvent<HTMLInputElement>): void
	city: string
}

function NavBarUserInputField(props: Props) {
	const { inputChange, city } = props

	//Simulates Clicking on the search button when hitting 'enter' in search box
	function simulateClickingSearch(
		e: React.KeyboardEvent<HTMLInputElement>
	): void {
		if (e.key === "Enter") {
			const searchBtn: HTMLButtonElement | null = document.querySelector(
				"#search-btn"
			)
			if (searchBtn instanceof HTMLButtonElement) {
				searchBtn.click()
			}
		}
	}

	return (
		<input
			onChange={inputChange}
			onKeyPress={simulateClickingSearch}
			className="nav-bar-input"
			type="text"
			value={city}
			placeholder="[city] or [city, country code]"
		/>
	)
}

export default NavBarUserInputField
