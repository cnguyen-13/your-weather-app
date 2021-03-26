import { TIME_OF_DAY_GREETING } from "../../constants/time-of-day-greeting"

function messageTimeOfDay(hours: number): string {
	if (hours >= 0 && hours <= 11) return TIME_OF_DAY_GREETING.MORNING
	if (hours >= 12 && hours <= 18) return TIME_OF_DAY_GREETING.AFTERNOON
	return TIME_OF_DAY_GREETING.EVENING
}

function getGreeting(time?: number | undefined): string {
	const today: Date = time ? new Date(time) : new Date()
	const hours: number = today.getHours()
	const message: string = messageTimeOfDay(hours)
	return message
}

export { getGreeting }
