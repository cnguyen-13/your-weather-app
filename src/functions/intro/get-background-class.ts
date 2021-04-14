import { BACKGROUND_CLASSES } from "../../constants/intro/intro-background-classes"

function getHour(): number {
	const today: Date = new Date()
	const hours: number = today.getHours()
	return hours
}

function getBackgroundClass(): string {
	const hours = getHour()
	if (hours >= 0 && hours <= 11) return BACKGROUND_CLASSES.MORNING
	if (hours >= 12 && hours <= 18) return BACKGROUND_CLASSES.AFTERNOON
	return BACKGROUND_CLASSES.EVENING
}

export { getBackgroundClass }
