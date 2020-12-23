import React, { useEffect } from 'react';

interface Props {
    value: string,
    topic: string,
    onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void
}

function TextInput(props: Props) {
    const { value, topic, onChangeHandler } = props;
    const placeholder = topic === 'name' ? '[ Your Name ]' : '[ Your City ]';
    const styles = {
        border: 'none',
        backgroundColor: 'transparent',
        color: 'inherit',
        fontSize: 'inherit',
    }

    //Changes the width of the input field to only hold letters
    useEffect(() => {
        const inputElement: any = document.querySelector(`#${topic}`);
        const { parentElement, value, style, placeholder } = inputElement;
        const fontSize: number = parseFloat(window.getComputedStyle(parentElement, null).getPropertyValue('font-size'));
        if (value.length === 0) {
            style.width = `${((placeholder.length) * fontSize) / 2}px`;
        } else {
            style.width = `${(value.length * fontSize) / 2}px`;
        }
    }, [value, topic])

    return (
        <input
            id={topic}
            style={styles}
            type="text"
            onChange={onChangeHandler}
            value={value}
            placeholder={placeholder}
        />
    )
}

export default TextInput;