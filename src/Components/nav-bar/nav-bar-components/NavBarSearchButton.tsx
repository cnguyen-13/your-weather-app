import React from "react"
import { Link } from "react-router-dom"

interface Props {
	city: string
	clearInput(): void
}

function NavBarSearchButton(props: Props) {
	const { city, clearInput } = props
	//Make sure this component has an actual input

	return (
		<Link
			to={`/${city}`}
			className="nav-bar-search-btn clickable"
			onClick={clearInput}
		>
			Search
		</Link>
	)
}

export default NavBarSearchButton
