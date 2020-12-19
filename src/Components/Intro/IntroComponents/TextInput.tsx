import React from 'react';

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

    const changeWidthAndUpdateValues = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChangeHandle(e)
        // const parent: any | null = e.target.parentElement;
        // console.log(parent.style.fontSize)
        // console.log(e.target.parentElement)
        // e.target.style.width = `${e.target.value}`
    }

    return (
        <input
            id={topic}
            style={styles}
            type="text"
            onChange={changeWidthAndUpdateValues}
            value={value}
            placeholder={placeholder}
        />
    )
}

export default TextInput;