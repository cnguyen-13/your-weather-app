const { imageUrl } = require("../../HelperFunctions/imageUrl");

test("imageUrl Function Testing", () => {
    expect(imageUrl("Austin")).toBe(
        "https://api.unsplash.com/search/photos?query=Austin&orientation=landscape&client_id=jY1QfhlpqNPs4wI8AywokF-l_LpooDq4HRauIfn7HZI"
    );

    expect(imageUrl("Venice")).toBe(
        "https://api.unsplash.com/search/photos?query=Venice&orientation=landscape&client_id=jY1QfhlpqNPs4wI8AywokF-l_LpooDq4HRauIfn7HZI"
    );

    expect(imageUrl("Boston")).toBe(
        "https://api.unsplash.com/search/photos?query=Boston&orientation=landscape&client_id=jY1QfhlpqNPs4wI8AywokF-l_LpooDq4HRauIfn7HZI"
    );

    expect(imageUrl("Sydney")).toBe(
        "https://api.unsplash.com/search/photos?query=Sydney&orientation=landscape&client_id=jY1QfhlpqNPs4wI8AywokF-l_LpooDq4HRauIfn7HZI"
    );
});
