function toggleBodyMask(): void {
	const mask: any = document.querySelector(".mask")
	mask.classList.toggle("mask-active")
}

function toggleScrollLock(): void {
	const body: any = document.querySelector("body")
	body.classList.toggle("scroll-lock")
}

function removeBodyMask(): void {
	const mask: any = document.querySelector(".mask")
	mask.classList.remove("mask-active")
}

function removeScrollLock(): void {
	const body: any = document.querySelector("body")
	body.classList.remove("scroll-lock")
}

function toggleActiveSearchSettings() {
	const settings: any = document.querySelectorAll(".search-settings")[1]
	settings.classList.toggle("search-settings-active")
}

function removeActiveSearchSettings() {
	const settings: any = document.querySelectorAll(".search-settings")[1]
	settings.classList.remove("search-settings-active")
}

export function toggleNavActive() {
	toggleBodyMask()
	toggleScrollLock()
	toggleActiveSearchSettings()
}

export function removeNavActive() {
	removeBodyMask()
	removeScrollLock()
	removeActiveSearchSettings()
}
