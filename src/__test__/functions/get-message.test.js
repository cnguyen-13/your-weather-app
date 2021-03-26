const { getGreeting } = require("../../functions/intro/get-greeting")

test("getGreeting Test #1", () => {
	expect(getGreeting(1592912132019)).toBe("Good Morning")
	expect(getGreeting(1572132000000)).toBe("Good Afternoon")
	expect(getGreeting(1472175931351)).toBe("Good Evening")
	expect(getGreeting(1392018672812)).toBe("Good Morning")
	expect(getGreeting(1590298173133)).toBe("Good Morning")
	expect(getGreeting(1582888882132)).toBe("Good Morning")
	expect(getGreeting(1301000000000)).toBe("Good Afternoon")
	expect(getGreeting(1521323379111)).toBe("Good Afternoon")
	expect(getGreeting(1499999999999)).toBe("Good Evening")
	expect(getGreeting(1519238999123)).toBe("Good Afternoon")
})
