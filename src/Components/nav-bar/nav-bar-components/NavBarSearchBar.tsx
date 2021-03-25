import React, { useState } from "react"
import NavBarSearchButton from "./NavBarSearchButton"

function SearchBar() {
	const [city, setCity] = useState<string>("")

	//Updates city state
	const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target
		setCity(value)
	}

	//Simulates Clicking on the search button when hitting 'enter' in search box
	const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === "Enter") {
			const searchBtn: HTMLButtonElement | null = document.querySelector(
				"#search-btn"
			)
			if (searchBtn instanceof HTMLButtonElement) {
				searchBtn.click()
			}
			setCity("")
		}
	}

	return (
		<div className="nav-bar-search">
			<input
				onChange={inputChange}
				onKeyPress={onEnterPress}
				className="nav-bar-input"
				type="text"
				value={city}
				placeholder="[city] or [city, country code]"
			/>
			<NavBarSearchButton city={city} clearInput={() => setCity("")} />
		</div>
	)
}

export default SearchBar
