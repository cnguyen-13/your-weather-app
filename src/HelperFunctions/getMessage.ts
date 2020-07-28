const { messages } = require("../Data/messages");

function getMessage(): string {
    const today: Date = new Date();
    const hours: number = today.getHours();
    const message: string = messageFromHours(hours);
    return message;
}

//Helper Function
function messageFromHours(hours: number): string {
    let message;
    if (hours >= 0 && hours <= 11) {
        message = messages.morning;
    } else if (hours >= 12 && hours <= 18) {
        message = messages.afternoon;
    } else {
        message = messages.evening;
    }
    return message;
}

export { getMessage };
