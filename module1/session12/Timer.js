class Timer {
    constructor(duration) {
        this.duration = duration // durasi dalam milliseconds
        this.timeoutId = null
    }
    // start timer
    start(callback) {
        this.timeoutId = setTimeout(() => {
            callback();
            console.log(`Timer finished after ${this.duration / 1000} seconds. `)
        }, this.duration);
    }
    // stop timer
    stop() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            console.log(`Timer stopped.`);
        }
    }
}

module.exports = Timer