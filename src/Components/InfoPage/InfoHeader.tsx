import React, { useState, useEffect } from "react";
const apiKeyUnsplash = "jY1QfhlpqNPs4wI8AywokF-l_LpooDq4HRauIfn7HZI";
interface Props {
    city: string | null;
    country: string | null;
}

function InfoHeader(props: Props) {
    const { city, country } = props;
    const [bgImage, setBgImage] = useState<string | null>(null);
    useEffect(() => {
        async function getBgImage() {
            const res = await fetch(
                `https://api.unsplash.com/search/photos?query=${city}&orientation=landscape&client_id=${apiKeyUnsplash}`
            );
            const data = await res.json();
            const arr = data.results;
            const randomImg = arr[Math.floor(Math.random() * arr.length)];
            const image = randomImg.urls.full;
            setBgImage(image);
        }

        getBgImage();
    }, [city]);

    if (bgImage) {
        return (
            <section
                className="city-bg"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
                }}
            >
                <h2 className="city-title">
                    City of {city}
                    <span className="city-subtitle">, {country}</span>
                </h2>
            </section>
        );
    } else {
        return (
            <section className="city-bg">
                <h2 className="city-title">
                    Loading...
                    <span className="city-subtitle"></span>
                </h2>
            </section>
        );
    }
}

export default InfoHeader;
