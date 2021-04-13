import React from "react"
import InfoSection from "./InfoSection"
import { CATEGORIES_ARR_VERSION } from "../../../constants/day-forecast/categories"
import { forecastDay } from "../../../interface/interfaces"

interface Props {
	title: string
	forecastDay: forecastDay
}

function Info(props: Props) {
	const { title, forecastDay } = props
	const infoSectionComponents = CATEGORIES_ARR_VERSION.map(
		(category: string, idx: number) => {
			return (
				<InfoSection
					forecastDay={forecastDay}
					category={category}
					key={`${category}_${idx}`}
				/>
			)
		}
	)

	return (
		<section className="pb-3 text-centered text-left-desktop df-flex-item-40">
			<h2 className="mb-2 fs-med fw-normal">{title}</h2>
			<div className="grid">{infoSectionComponents}</div>
		</section>
	)
}

export default Info
