function formatTime(num: number, type?: string): string {
    let formattedTime: string = "";
    let time: number = num;
    if (type === "hours") {
        time = num === 0 || num === 12 ? 12 : num % 12;
    }
    const isSingleDigit: boolean = time >= 0 && time <= 9;
    formattedTime = isSingleDigit ? `0${time}` : `${time}`;
    return formattedTime;
}

export { formatTime };
