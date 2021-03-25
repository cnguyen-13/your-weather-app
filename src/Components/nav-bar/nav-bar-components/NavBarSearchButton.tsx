import React from "react"
import { Link } from "react-router-dom"

interface Props {
	city: string
	clearInput: () => void
}

function NavBarSearchButton(props: Props) {
	const { city, clearInput } = props

	return (
		<Link to={`/${city}`}>
			<button onClick={clearInput} className="nav-bar-btn" id="search-btn">
				Search
			</button>
		</Link>
	)
}

export default NavBarSearchButton
