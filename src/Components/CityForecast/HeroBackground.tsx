import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const { coordinatesUrl } = require("../../HelperFunctions/coordinatesUrl");
const { imageUrl } = require("../../HelperFunctions/imageUrl");

interface Props {
    setIsInvalidCity: any;
}

function HeroBackground(props: Props) {
    const { setIsInvalidCity } = props;
    const { cityParam } = useParams();
    const [bgImage, setBgImage] = useState<string>("");
    const [countryName, setCountryName] = useState<string>("");

    //Styles
    const styles = {
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
        backgroundAttachment: 'fixed'
    }
    //Get Country Name & Background Image
    useEffect(() => {
        const getCountryName = async () => {
            try {
                const url: string = coordinatesUrl(cityParam);
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
                const imageEndpoint: string = imageUrl(cityParam);
                const res = await fetch(imageEndpoint);
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
                style={styles}
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
