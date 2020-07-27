import React from "react";

interface Props {
    city: string | null;
    setLocalCity: any;
}

function IntroQuestion(props: Props) {
    const { city, setLocalCity } = props;

    return (
        <p className="intro-question">
            Want to Check the City of{" "}
            <span contentEditable="true" onInput={setLocalCity}>
                {city}
            </span>
            's Weather?
        </p>
    );
}

export default IntroQuestion;
