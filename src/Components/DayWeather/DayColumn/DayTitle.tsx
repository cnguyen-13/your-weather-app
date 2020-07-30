import React from "react";

interface Props {
    title: string;
}

function DayTitle(props: Props) {
    const { title } = props;

    return <h3 className="date-info-section-title">{title}</h3>;
}

export default DayTitle;
