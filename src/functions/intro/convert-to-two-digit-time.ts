function convertToStandardTimeHours(hours: number): number {
	const convertedHour = hours === 0 || hours === 12 ? 12 : hours % 12
	return convertedHour
}

function convertToTwoDigitTime(num: number, isHours: boolean = false): string {
	const time: number = isHours ? convertToStandardTimeHours(num) : num
	const isSingleDigit: boolean = time >= 0 && time <= 9
	const twoDigitFormat: string = isSingleDigit ? `0${time}` : `${time}`
	return twoDigitFormat
}

export { convertToTwoDigitTime }
