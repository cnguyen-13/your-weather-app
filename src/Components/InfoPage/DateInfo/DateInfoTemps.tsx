import React from "react";
import temps from "../../../images/misc/temps.svg";
interface Props {
    cityData: any;
    tempUnits?: string;
}

function DateInfoTemps(props: Props) {
    const { cityData, tempUnits } = props;
    //Temps
    const tempMin: number = Math.round(cityData.temp.min);
    const tempMax: number = Math.round(cityData.temp.max);
    const tempMorning: number = Math.round(cityData.temp.morn);
    const tempDay: number = Math.round(cityData.temp.day);
    const tempEve: number = Math.round(cityData.temp.eve);
    const tempNight: number = Math.round(cityData.temp.night);

    return (
        <section className="date-info-section">
            <div className="date-graphic">
                <img
                    className="date-info-img"
                    src={temps}
                    alt="temps section"
                />
            </div>
            <div className="date-info-text">
                <h4 className="date-info-label">Min</h4>
                <p className="date-info-data">{tempMin} °F</p>

                <h4 className="date-info-label">Max</h4>
                <p className="date-info-data">{tempMax} °F</p>

                <h4 className="date-info-label">Morning</h4>
                <p className="date-info-data">{tempMorning} °F</p>

                <h4 className="date-info-label">Day</h4>
                <p className="date-info-data">{tempDay} °F</p>

                <h4 className="date-info-label">Evening</h4>
                <p className="date-info-data">{tempEve} °F</p>

                <h4 className="date-info-label">Night</h4>
                <p className="date-info-data">{tempNight} °F</p>
            </div>
        </section>
    );
}

export default DateInfoTemps;
