import { DAYS } from "../../constants/forecast-cards/days"

interface dateMonthDay {
	date: number
	month: number
	day: string
}

function getDateTimes(dt: number): dateMonthDay {
	const milliseconds: number = dt * 1000
	const fullDate: Date = new Date(milliseconds)
	const dayIdx: number = fullDate.getDay()
	const date: number = fullDate.getDate()
	const month: number = fullDate.getMonth() + 1
	const day: string = DAYS[dayIdx]
	return { date, month, day }
}

export { getDateTimes }
