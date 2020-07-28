const { days } = require("../Data/days");

function getDateTimes(
    dtFromData: number
): { date: number; month: number; day: string } {
    const milliseconds: number = dtFromData * 1000;
    const fullDate: Date = new Date(milliseconds);
    const date: number = fullDate.getDate();
    const month: number = fullDate.getMonth() + 1;
    const dayIdx: number = fullDate.getDay();
    const day: string = days[dayIdx];
    return { date, month, day };
}

export { getDateTimes };
