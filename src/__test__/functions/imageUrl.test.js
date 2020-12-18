const { imageUrl } = require("../../HelperFunctions/imageUrl");

test("imageUrl Function Testing", () => {
    expect(imageUrl("Austin")).toBe(
        "https://api.unsplash.com/search/photos?query=Austin&orientation=landscape&client_id={REACT_APP_UNSPLASH_API_KEY}"
    );
REACT_APP_UNSPLASH_API_KEY
    expect(imageUrl("Venice")).toBe(
        "https://api.unsplash.com/search/photos?query=Venice&orientation=landscape&client_id={REACT_APP_UNSPLASH_API_KEY}"
    );

    expect(imageUrl("Boston")).toBe(
        "https://api.unsplash.com/search/photos?query=Boston&orientation=landscape&client_id={REACT_APP_UNSPLASH_API_KEY}"
    );

    expect(imageUrl("Sydney")).toBe(
        "https://api.unsplash.com/search/photos?query=Sydney&orientation=landscape&client_id={REACT_APP_UNSPLASH_API_KEY}"
    );
});
