const { getMessage } = require("../../functions/get-message")

test("getMessage Test #1", () => {
	expect(getMessage(1592912132019)).toBe("Good Morning")
	expect(getMessage(1572132000000)).toBe("Good Afternoon")
	expect(getMessage(1472175931351)).toBe("Good Evening")
	expect(getMessage(1392018672812)).toBe("Good Morning")
	expect(getMessage(1590298173133)).toBe("Good Morning")
	expect(getMessage(1582888882132)).toBe("Good Morning")
	expect(getMessage(1301000000000)).toBe("Good Afternoon")
	expect(getMessage(1521323379111)).toBe("Good Afternoon")
	expect(getMessage(1499999999999)).toBe("Good Evening")
	expect(getMessage(1519238999123)).toBe("Good Afternoon")
})
