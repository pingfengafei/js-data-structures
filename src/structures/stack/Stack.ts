class Stack<T> {
    private list: Array<T> = [];
    private count: number = 0;

    constructor(stack = []) {
        this.list = stack;
        this.count = stack.length;
    }

    public push(item: T) {
        this.list.push(item);
        ++this.count;
    }

    public pop(): T {
        let item;

        if (this.count >= 1) {
            item = this.list.pop();
            --this.count;
        }

        return item;
    }

    public isEmpty() {
        return this.count === 0;
    }

    public length(): number {
        return this.count;
    }
}


export default Stack;
