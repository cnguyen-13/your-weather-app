import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
const { coordinatesUrl } = require("../../HelperFunctions/coordinatesUrl");
const { imageUrl } = require("../../HelperFunctions/imageUrl");

interface Props {
    setIsInvalidCity: any;
}

function HeroBackground(props: Props) {
    const { setIsInvalidCity } = props;
    const { cityParam } = useParams();
    const [bgImage, setBgImage] = useState<string[]>([]);
    const [countryName, setCountryName] = useState<string>("");

    //Styles
    const styles = {
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage[0]})`,
        backgroundAttachment: 'fixed'
    }

    function generateRandomIndexs(length: number): number[] {
        const firstIdx: number = Math.floor(Math.random() * length);
        let secondIdx: number = Math.floor(Math.random() * length);
        while (secondIdx === firstIdx) {
            secondIdx = Math.floor(Math.random() * length);
        }

        return [firstIdx, secondIdx];
    }

    //Get Country Name & Background Image
    useEffect(() => {
        const getCountryName = async () => {
            try {
                const url: string = coordinatesUrl(cityParam);
                const res = await axios.get(url);
                const data = res.data;
                const country: string = data.sys.country;
                setCountryName(country);
            } catch (err) {
                setIsInvalidCity(true);
            }
        };

        const getBgImages = async () => {
            try {
                const url: string = imageUrl(cityParam);
                const res = await axios.get(url)
                const dataArr: [] = res.data.results;
                console.log(dataArr)
                const randomIndexs: number[] = generateRandomIndexs(dataArr.length)
                const randomImages: string[] = randomIndexs.map(idx => {
                    const image: any = dataArr[idx];
                    const imageUrl: any = image.urls.full;
                    return imageUrl;
                })
                setBgImage(randomImages);
            } catch (err) {
                setIsInvalidCity(true);
            }
        };

        getCountryName();
        getBgImages();
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
