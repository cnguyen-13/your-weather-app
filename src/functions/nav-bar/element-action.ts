import { TYPES, ACTIONS } from "../../constants/nav-toggles/types-and-actions"

export function elementAction(
	element: Element | null,
	type: string,
	action: string
): any {
	if (element && type === TYPES.MASK && action === ACTIONS.TOGGLE)
		return element.classList.toggle("mask-active")
	if (element && type === TYPES.MASK && action === ACTIONS.REMOVE)
		return element.classList.remove("mask-active")

	if (element && type === TYPES.BODY && action === ACTIONS.TOGGLE)
		return element.classList.toggle("scroll-lock")
	if (element && type === TYPES.BODY && action === ACTIONS.REMOVE)
		return element.classList.toggle("scroll-lock")

	if (element && type === TYPES.SETTINGS && action === ACTIONS.TOGGLE)
		return element.classList.toggle("search-settings-active")
	if (element && type === TYPES.SETTINGS && action === ACTIONS.REMOVE)
		return element.classList.toggle("search-settings-active")
}
