import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import HeroBackground from "./HeroBackground";
import FCards from "./Cards/FCards";
import InvalidCityPage from "./InvalidCityPage";
import BackgroundImagesContext from '../../BackgroundImagesContext';
const { coordinatesUrl } = require("../../HelperFunctions/coordinatesUrl");
const { generateRandomIndexs } = require('../../HelperFunctions/generateRandomIndexs');
const { imageUrl } = require("../../HelperFunctions/imageUrl");
interface Params {
    cityParam: string
}
function CityPage() {
    const { cityParam } = useParams<Params>();
    const [countryName, setCountryName] = useState<string>('');
    const [bgImages, setBgImages] = useState([]);
    const [isInvalidCity, setIsInvalidCity] = useState<boolean>(false);

    //Resets so that the new cityParam has a chance of being valid
    useEffect(() => {
        //Gets Country Name if valid
        const getCountryName = async () => {
            try {
                setIsInvalidCity(false);
                const url: string = coordinatesUrl(cityParam);
                const res = await axios.get(url);
                const data = res.data;
                const country: string = data.sys.country;
                setCountryName(country);
            } catch (err) {
                setIsInvalidCity(true);
            }
            return;
        };

        //Gets background images
        const getBgImages = async () => {
            setBgImages([]);
            const url: string = imageUrl(cityParam);
            const res = await axios.get(url)
            const dataArr: [] = res.data.results;
            const randomIndexs: number[] = generateRandomIndexs(dataArr.length)
            const randomImages: any = randomIndexs.map(idx => {
                const image: any = dataArr[idx];
                const imageUrl: any = image.urls.full;
                return imageUrl;
            })
            setBgImages(randomImages);
        };

        getCountryName();
        getBgImages();
    }, [cityParam]);

    if (isInvalidCity) {
        return <InvalidCityPage invalidCityName={cityParam.toUpperCase()} />;
    }

    return (
        <div className="info-page">
            <BackgroundImagesContext.Provider value={bgImages}>
                <HeroBackground cityName={cityParam.toUpperCase()} countryName={countryName} />
                <FCards city={cityParam} />
            </BackgroundImagesContext.Provider>
        </div >
    );
}

export default CityPage;
