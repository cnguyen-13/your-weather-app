function imageUrl(city: string): string {
    return `https://api.unsplash.com/search/photos?query=${city}&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
}

export { imageUrl };
