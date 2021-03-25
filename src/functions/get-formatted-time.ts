import { formatTime } from "./format-time"

function getFormattedTime(time?: number | undefined): string {
	const today: Date = time ? new Date(time) : new Date()
	const hours: string = formatTime(today.getHours(), "hours")
	const minutes: string = formatTime(today.getMinutes(), "minutes")
	const seconds: string = formatTime(today.getSeconds(), "seconds")
	const amOrPm: string = today.getHours() < 12 ? "AM" : "PM"
	const formattedTime: string = `${hours}:${minutes}:${seconds} ${amOrPm}`
	return formattedTime
}

export { getFormattedTime }
