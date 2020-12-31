import React, { useState, useEffect, useContext } from "react";
import DataCell from './DataCell';
import MeasurementSystemContext from '../../../MeasurementSystemContext';
import temp from '../../../images/misc/hot.png';
import weather from '../../../images/misc/cloudy.png';
import wind from '../../../images/misc/wind.png';
const { getAllTemps } = require("../../../HelperFunctions/getAllTemps");
const { getAllWeather } = require("../../../HelperFunctions/getAllWeather");
const { getAllWind } = require("../../../HelperFunctions/getAllWind");

interface Props {
    cityData: any;
    title: string;
}

interface dataObject {
    label: string;
    data: string;
}

function DayColumn(props: Props) {
    const { cityData, title } = props;
    const { measurementSystem } = useContext(MeasurementSystemContext);
    const [image, setImage] = useState<any>();
    const [data, setData] = useState<dataObject[] | undefined>([])

    useEffect(() => {
        //Obtain correct Data set
        let dataArr: dataObject[] | undefined;
        if (title === "temp") {
            dataArr = getAllTemps(cityData, measurementSystem);
        } else if (title === 'wind') {
            dataArr = getAllWind(cityData, measurementSystem)
        } else {
            dataArr = getAllWeather(cityData);
        }

        setData(dataArr)
    }, [cityData, measurementSystem])

    useEffect(() => {
        //Getting correct icon
        if (title === 'temp') {
            setImage(temp);
        } else if (title === 'wind') {
            setImage(wind);
        } else {
            setImage(weather);
        }
    }, [title])

    return (
        <section className="date-info-section">
            <img src={image} className="date-info-icon" alt={title} />
            <div className="date-info-text">
                {data ? data.map(pair => <DataCell key={pair.label} label={pair.label} data={pair.data} />) : null}
            </div>
        </section>
    );
}

export default DayColumn;
