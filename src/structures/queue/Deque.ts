import Queue from './Queue';

interface IDeque {
    addFront: (elem: any) => void,
    addBack: (elem: any) => void,
    removeFront: () => any,
    removeBack: () => any,
    peekFront: () => any,
    peekBack: () => any
}

class Deque extends Queue implements IDeque {
    constructor(defaultQueue) {
        super(defaultQueue);
    }

    addBack(elem: any): void {
        this.enqueue(elem);
    }

    addFront(elem: any): void {
        elem = Array.isArray(elem) ? elem : [elem];
        this.queue = [...elem, ...this.queue];
    }

    peekBack(): any {
        return this.queue[this.queue.length - 1];
    }

    peekFront(): any {
        return this.peek();
    }

    removeBack(): any {
        return this.queue.pop();
    }

    removeFront(): any {
        return this.dequeue();
    }
}


export default Deque;
