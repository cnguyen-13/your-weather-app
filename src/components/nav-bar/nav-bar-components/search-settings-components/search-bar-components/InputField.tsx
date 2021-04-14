import React from "react"

interface Props {
	inputChange(e: React.ChangeEvent<HTMLInputElement>): void
	city: string
}

function InputField(props: Props) {
	const { inputChange, city } = props

	//Simulates Clicking on the search button when hitting 'enter' in search box
	function onEnterKeyPress(e: any): void {
		const searchBtn = e.target.nextElementSibling
		if (e.key === "Enter") {
			searchBtn.click()
		}
	}

	return (
		<input
			onChange={inputChange}
			onKeyPress={onEnterKeyPress}
			className="dimen-input b-full-primary p-search-input"
			type="text"
			value={city}
			placeholder="[city] or [city, country code]"
		/>
	)
}

export default InputField
