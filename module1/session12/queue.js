class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    async dequeue() {
        while (this.items.length > 0) {
            const item = this.items.shift();
            console.log(`Processing order: ${item}`);
            await new Promise(resolve => setTimeout(resolve, Math.random() * 9000 + 1000));
            console.log(`Order ${item} processed`);
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = Queue;
