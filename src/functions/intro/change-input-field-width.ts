//Changes the width of the input field based on characters typed
export function changeInputFieldWidth(inputField: string): void {
	const inputElement: any = document.querySelector(`#${inputField}`)
	const { parentElement, value, style, placeholder } = inputElement
	const fontSize: number = parseFloat(
		window.getComputedStyle(parentElement, null).getPropertyValue("font-size")
	)
	value.length === 0
		? (style.width = `${(placeholder.length * fontSize) / 2}px`)
		: (style.width = `${(value.length * fontSize) / 2}px`)
}
