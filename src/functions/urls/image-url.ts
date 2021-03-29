function imageUrl(city: string): string {
	return `https://api.unsplash.com/search/photos?query=City%20Of%20${city}&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
}

export { imageUrl }
