import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const apiKeyUnsplash = "jY1QfhlpqNPs4wI8AywokF-l_LpooDq4HRauIfn7HZI";
const apiKeyWeather = `065cf514db0debfd884bf32efd0de162`;

interface Props {
    setIsInvalidCity: any;
}

function HeroBackground(props: Props) {
    const { setIsInvalidCity } = props;
    const { cityParam } = useParams();
    const [bgImage, setBgImage] = useState<string>("");
    const [countryName, setCountryName] = useState<string>("");

    //Get Country Name & Background Image
    useEffect(() => {
        const getCountryName = async () => {
            try {
                const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityParam}&appid=${apiKeyWeather}`;
                const res = await fetch(url);
                const data = await res.json();
                const country: string = data.sys.country;
                setCountryName(country);
            } catch (err) {
                setIsInvalidCity(true);
            }
        };

        const getBgImage = async () => {
            try {
                const res = await fetch(
                    `https://api.unsplash.com/search/photos?query=${cityParam}&orientation=landscape&client_id=${apiKeyUnsplash}`
                );
                const data = await res.json();
                const arr = data.results;
                const randomImg = arr[Math.floor(Math.random() * arr.length)];
                const image = randomImg.urls.full;
                setBgImage(image);
            } catch (err) {
                setIsInvalidCity(true);
            }
        };

        getCountryName();
        getBgImage();
    }, [cityParam]);

    if (bgImage && countryName) {
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
                    City of {cityParam.split(",")[0].toUpperCase()}
                    <span className="city-subtitle">, {countryName}</span>
                </h2>
            </section>
        );
    }

    return (
        <section className="city-bg">
            <h2 className="city-title">Loading...</h2>
        </section>
    );
}

export default HeroBackground;
