const { days } = require("../Data/days");

interface returnDateObject {
    date: number;
    month: number;
    day: string;
}

function getDateTimes(dtFromData: number): returnDateObject {
    const milliseconds: number = dtFromData * 1000;
    const fullDate: Date = new Date(milliseconds);
    const dayIdx: number = fullDate.getDay();
    const date: number = fullDate.getDate();
    const month: number = fullDate.getMonth() + 1;
    const day: string = days[dayIdx];
    return { date, month, day };
}

export { getDateTimes };
