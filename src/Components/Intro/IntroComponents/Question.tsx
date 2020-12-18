import React from "react";

interface Props {
    city: string;
    onChangeHandleCity(e: any): void;
}

function Question(props: Props) {
    const { city, onChangeHandleCity } = props;

    const styles = {
        border: 'none',
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: '24px'
    }

    return (
        <p className="intro-question">
            Want to Check the City of{" "}
            <input style={styles}
                type="text"
                onChange={onChangeHandleCity}
                value={city}
                placeholder={city === '' ? '[ Your City ]' : ''}
            />
            's Weather?
        </p>
    );
}

export default Question;
