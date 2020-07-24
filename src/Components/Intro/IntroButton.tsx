import React from "react";
import { Link } from "react-router-dom";

interface Props {
    slideFunc: any;
    city: string | null;
}

function IntroButton(props: Props) {
    const { slideFunc, city } = props;

    return (
        <Link to={`/${city}`}>
            <button className="intro-btn" onClick={slideFunc}>
                CHECK WEATHER
            </button>
        </Link>
    );
}

export default IntroButton;
