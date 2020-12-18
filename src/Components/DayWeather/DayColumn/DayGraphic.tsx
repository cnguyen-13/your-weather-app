import React from "react";

interface Props {
    title: string;
}

function DayGraphic(props: Props) {
    const { title } = props;
    const href: string = `https://dryicons.com/free-icons/${title}-circle-icon`;
    const alt: string = `${title} section`;

    //Graphic picture

    return (
        <div className="date-graphic">
            <a href={href}>
                <img className="date-info-img" alt={alt} />
            </a>
        </div>
    );
}

export default DayGraphic;
