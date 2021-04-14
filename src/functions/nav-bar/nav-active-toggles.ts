import {
	toggleBodyMask,
	toggleScrollLock,
	toggleActiveSearchSettings,
	removeBodyMask,
	removeScrollLock,
	removeActiveSearchSettings,
} from "./nav-active-helper-functions"

export function toggleNavActive(): void {
	toggleBodyMask()
	toggleScrollLock()
	toggleActiveSearchSettings()
}

export function removeNavActive(): void {
	removeBodyMask()
	removeScrollLock()
	removeActiveSearchSettings()
}
