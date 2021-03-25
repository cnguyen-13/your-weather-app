import { getBackgroundClass } from "../../functions/get-background-class"

test("getBackgroundClass Testing", () => {
	expect(getBackgroundClass(0)).toBe("morning")
	expect(getBackgroundClass(11)).toBe("morning")
	expect(getBackgroundClass(12)).toBe("afternoon")
	expect(getBackgroundClass(18)).toBe("afternoon")
	expect(getBackgroundClass(19)).toBe("evening")
	expect(getBackgroundClass(23)).toBe("evening")
})
