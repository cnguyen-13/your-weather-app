import React, { useState } from "react"
import NavBarCityInputField from "./CityInputField"
import SearchButton from "./SearchButton"

function SearchBar() {
	const [city, setCity] = useState<string>("")

	function clearInput(): void {
		setCity("")
	}

	function inputChange(e: React.ChangeEvent<HTMLInputElement>): void {
		setCity(e.target.value)
	}

	return (
		<div className="nav-flex-layout dimen-search full-height-percent">
			<NavBarCityInputField inputChange={inputChange} city={city} />
			<SearchButton city={city} clearInput={clearInput} />
		</div>
	)
}

export default SearchBar
