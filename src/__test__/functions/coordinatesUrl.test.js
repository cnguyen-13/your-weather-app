const { coordinatesUrl } = require("../../HelperFunctions/coordinatesUrl");

test("Testing CoordinatesUrl Function", () => {
    expect(coordinatesUrl("Paris")).toBe(
        `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=065cf514db0debfd884bf32efd0de162`
    );

    expect(coordinatesUrl("Berlin")).toBe(
        `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=065cf514db0debfd884bf32efd0de162`
    );

    expect(coordinatesUrl("Tokyo")).toBe(
        `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=065cf514db0debfd884bf32efd0de162`
    );

    expect(coordinatesUrl("London")).toBe(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=065cf514db0debfd884bf32efd0de162`
    );
});
