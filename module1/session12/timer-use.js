const Timer = require('./Timer');

const myTimer = new Timer(5000); // 5 seconds timer

// define callback
const timeUp = () => {
    console.log("Time's up!");
}

myTimer.start(timeUp)