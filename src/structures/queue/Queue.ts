interface IQueue {
    enqueue: (elem: any) => void, // void: function returns undefined
    dequeue: () => any, // queue may be empty
    peek: () => any,
    isEmpty: () => boolean,
    size: () => number
}


class Queue implements IQueue {
    protected queue: Array<any> = []; // protected for extends

    constructor(defaultQueue) {
        this.queue = defaultQueue;
    }

    enqueue(elem: any): void {
        Array.isArray(elem) ? this.queue = [...this.queue, ...elem] : this.queue.push(elem);
    }

    dequeue(): any {
        return this.queue.shift();
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }

    peek(): any {
        return this.queue[0];
    }

    size(): number {
        return this.queue.length;
    }
}

export default Queue;
