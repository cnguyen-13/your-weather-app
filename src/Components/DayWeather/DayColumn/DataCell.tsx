import React from 'react';

interface Props {
    label: string,
    data: string
}

function DataCell(props: Props) {
    const { label, data } = props;

    return (
        <div className="data-cell">
            <h4 className="date-info-label">{label}</h4>
            <p className="date-info-data">{data}</p>
        </div>
    )
}

export default DataCell;
