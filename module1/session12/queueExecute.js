const Queue = require('./queue');

async function processQueue() {
    const orderQueue = new Queue();

    // Add items queue
    for (let i = 1; i <= 5; i++) {
        orderQueue.enqueue(`Order ${i}`);
    }

    // Process queue
    await orderQueue.dequeue();
    console.log('All orders processed');
}

processQueue();
