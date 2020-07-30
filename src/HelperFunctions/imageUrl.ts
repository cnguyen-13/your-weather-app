const apiKeyUnsplash = "jY1QfhlpqNPs4wI8AywokF-l_LpooDq4HRauIfn7HZI";

function imageUrl(city: string): string {
    return `https://api.unsplash.com/search/photos?query=${city}&orientation=landscape&client_id=${apiKeyUnsplash}`;
}

export { imageUrl };
