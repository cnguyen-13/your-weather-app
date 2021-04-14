import { TYPES, ACTIONS } from "../../constants/nav-toggles/types-and-actions"
import { elementAction } from "./element-action"

export function toggleBodyMask(): void {
	const mask: Element | null = document.querySelector(".mask")
	elementAction(mask, TYPES.MASK, ACTIONS.TOGGLE)
}

export function toggleScrollLock(): void {
	const body: Element | null = document.querySelector(TYPES.BODY)
	elementAction(body, TYPES.BODY, ACTIONS.TOGGLE)
}

export function removeBodyMask(): void {
	const mask: Element | null = document.querySelector(".mask")
	elementAction(mask, TYPES.MASK, ACTIONS.REMOVE)
}

export function removeScrollLock(): void {
	const body: Element | null = document.querySelector(TYPES.BODY)
	elementAction(body, TYPES.BODY, ACTIONS.REMOVE)
}

export function toggleActiveSearchSettings() {
	const settings: Element | null = document.querySelectorAll(
		".search-settings"
	)[1]
	elementAction(settings, TYPES.SETTINGS, ACTIONS.TOGGLE)
}

export function removeActiveSearchSettings() {
	const settings: Element | null = document.querySelectorAll(
		".search-settings"
	)[1]
	elementAction(settings, TYPES.SETTINGS, ACTIONS.REMOVE)
}
