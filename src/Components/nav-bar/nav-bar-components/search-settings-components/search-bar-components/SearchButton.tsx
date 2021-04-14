import React from "react"
import { Link } from "react-router-dom"

interface Props {
	city: string
	clearInput(): void
}

function SearchButton(props: Props) {
	const { city, clearInput } = props

	return (
		<Link
			to={`/${city}`}
			onClick={clearInput}
			className="dimen-search-btn p-search-btn text-centered txt-color-white bg-color-primary clickable"
		>
			Search
		</Link>
	)
}

export default SearchButton
