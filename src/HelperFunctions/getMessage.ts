const { messages } = require("../Data/messages");

function getMessage() {
    let message: string = "";
    const today = new Date();
    const hours = today.getHours();
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
