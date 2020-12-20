import React, { useEffect } from 'react';

interface Props {
    value: string,
    topic: string,
    onChangeHandle(e: React.ChangeEvent<HTMLInputElement>): void
}

function TextInput(props: Props) {
    const { value, topic, onChangeHandle } = props;
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
        const parent: any | null = inputElement.parentElement;
        const parentFontSize: number = parseFloat(window.getComputedStyle(parent, null).getPropertyValue('font-size'));
        if (inputElement.value.length === 0) {
            inputElement.style.width = `${((inputElement.placeholder.length - 1) * parentFontSize) / 2}px`;
        } else {
            inputElement.style.width = `${(inputElement.value.length * parentFontSize) / 2}px`;
        }
    }, [value])

    return (
        <input
            id={topic}
            style={styles}
            type="text"
            onChange={onChangeHandle}
            value={value}
            placeholder={placeholder}
        />
    )
}

export default TextInput;