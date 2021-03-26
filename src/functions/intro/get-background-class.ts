import { BACKGROUND_CLASSES } from "../../constants/background-classes"

function getBackgroundClass(hours: number): string {
	if (hours >= 0 && hours <= 11) return BACKGROUND_CLASSES.MORNING
	if (hours >= 12 && hours <= 18) return BACKGROUND_CLASSES.AFTERNOON
	return BACKGROUND_CLASSES.EVENING
}

export { getBackgroundClass }
