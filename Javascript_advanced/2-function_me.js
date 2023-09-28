function welcomeMessage(fullName) {
    return function() {
        alert(`welcome ${fullName}`);
    }
}

const guillame = welcomeMessage('Guillame');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');

guillame()
alex()
fred()