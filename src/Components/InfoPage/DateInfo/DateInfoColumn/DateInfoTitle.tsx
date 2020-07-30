import React from "react";

interface Props {
    title: string;
}

function DateInfoTitle(props: Props) {
    const { title } = props;

    return <h3 className="date-info-section-title">{title}</h3>;
}

export default DateInfoTitle;
