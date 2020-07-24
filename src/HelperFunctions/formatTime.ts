function formatTime(num: number, type: string): string {
    let formattedTime;
    if (type === "hours") {
        let hours;
        if (num === 0) {
            hours = 12;
        } else if (num === 12) {
            hours = 12;
        } else {
            hours = num % 12;
        }
        const isSingleDigit = hours >= 0 && hours <= 9;
        formattedTime = isSingleDigit ? `0${hours}` : `${hours}`;
    } else {
        const isSingleDigit = num >= 0 && num <= 9;
        formattedTime = isSingleDigit ? `0${num}` : `${num}`;
    }
    return formattedTime;
}

// module.exports = {formatTime};
export { formatTime };
