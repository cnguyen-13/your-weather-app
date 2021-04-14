import React, { useState } from "react"
import InputField from "./search-bar-components/InputField"
import SearchButton from "./search-bar-components/SearchButton"

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
			<InputField inputChange={inputChange} city={city} />
			<SearchButton city={city} clearInput={clearInput} />
		</div>
	)
}

export default SearchBar
