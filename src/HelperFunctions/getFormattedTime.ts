const { formatTime } = require("./formatTime");

function getFormattedTime(time?: number | undefined): string {
    const today: Date = time ? new Date(time) : new Date();
    const hours: number = formatTime(today.getHours(), "hours");
    const minutes: number = formatTime(today.getMinutes(), "minutes");
    const seconds: number = formatTime(today.getSeconds(), "seconds");
    const amOrPm: string = today.getHours() < 12 ? "AM" : "PM";
    const formattedTime: string = `${hours}:${minutes}:${seconds} ${amOrPm}`;
    return formattedTime;
}

export { getFormattedTime };
