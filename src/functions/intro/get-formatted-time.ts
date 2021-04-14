import { convertToTwoDigitTime } from "./convert-to-two-digit-time"

function amOrPm(hours: number): string {
	return hours < 12 ? "AM" : "PM"
}

function getFormattedTime(time?: number | undefined): string {
	const today: Date = time ? new Date(time) : new Date()
	const todayHours = today.getHours()
	const todayMinutes = today.getMinutes()
	const todaySeconds = today.getSeconds()

	const hours: string = convertToTwoDigitTime(todayHours, true)
	const minutes: string = convertToTwoDigitTime(todayMinutes)
	const seconds: string = convertToTwoDigitTime(todaySeconds)
	const amOrPmTime: string = amOrPm(todayHours)

	return `${hours}:${minutes}:${seconds} ${amOrPmTime}`
}

export { getFormattedTime }
