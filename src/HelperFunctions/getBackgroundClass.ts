function getBackgroundClass(hours: number): string {
    let bgClass: string = "";
    if (hours >= 0 && hours <= 11) {
        bgClass = "morning";
    } else if (hours >= 12 && hours <= 18) {
        bgClass = "afternoon";
    } else {
        bgClass = "evening";
    }
    return bgClass;
}

export { getBackgroundClass };
