const { imageUrl } = require("../../functions/urls/image-url")

test("imageUrl Function Testing", () => {
	expect(imageUrl("Austin")).toBe(
		`https://api.unsplash.com/search/photos?query=City%20Of%20Austin&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
	)

	expect(imageUrl("Venice")).toBe(
		`https://api.unsplash.com/search/photos?query=City%20Of%20Venice&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
	)

	expect(imageUrl("Boston")).toBe(
		`https://api.unsplash.com/search/photos?query=City%20Of%20Boston&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
	)

	expect(imageUrl("Sydney")).toBe(
		`https://api.unsplash.com/search/photos?query=City%20Of%20Sydney&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
	)
})
