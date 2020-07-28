function formatTime(num: number, type: string): string {
    let formattedTime;
    let time = num;
    if (type === "hours") {
        time = num === 0 || num === 12 ? 12 : num % 12;
    }
    const isSingleDigit = time >= 0 && time <= 9;
    formattedTime = isSingleDigit ? `0${time}` : `${time}`;
    return formattedTime;
}

export { formatTime };
