import React, { useState, useEffect } from "react";

interface Props {
    city: string | null;
    setLocalCity: any;
}

function IntroQuestion(props: Props) {
    const { city, setLocalCity } = props;

    return (
        <p className="intro-question">
            Want to Check{" "}
            <span contentEditable="true" onInput={setLocalCity}>
                {city}
            </span>{" "}
            Weather?
        </p>
    );
}

export default IntroQuestion;
