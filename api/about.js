let aboutMessage = 'Hackathon 2k24 Intelligence!';

function setMessage(_, { message } ) {
    aboutMessage = message;
    return aboutMessage;
}

function getMessage() {
    return aboutMessage;
}

module.exports = { getMessage, setMessage };