import Node from './Node';

class LinkedList<T> {
  constructor(node: Node<T> | void) {
    this.head = node;
    if (node) {
      ++this.count;
    }
  }

  private count: number = 0;
  private head: void | Node<T>;

  public push(node: Node<T>) {
    ++this.count;

    let tail = this.head;

    if (tail) {
      while (tail.next) {
        tail = tail.next;
      }
    }

    if (!tail) {
      this.head = node;
    } else {
      tail.next = node;
    }
  }

  public insert(node: Node<T>, position?: number) { // position starts from 0
    if (!node) {
      throw new Error('invalid node');
    }

    if (position === undefined || position > this.count) {
      this.push(node); // append to tail when position is empty or exceed
    }

    if (position === 0) {
      const restList = this.head;
      this.head = node;
      this.head.next = restList;
    }

    const prevNode = this.findNode(position - 1);

    if (prevNode) {
      const restList = prevNode.next;
      prevNode.next = node;
      node.next = restList;
    }
  }

  public size() {
    return this.count;
  }

  private findNode(position) {
    if (position <= 0 || !this.head) {
      return this.head;
    }

    let target: void | Node<T> = this.head;
    let sentinel = 0;

    while (sentinel < position && target) {
      ++sentinel;
      target = target.next;
    }

    return target;
  }

  public toString(): String {
    const values = [];
    let point = this.head;
    while (point) {
      values.push(point.element);
      point = point.next;
    }

    return values.toString();
  }
}

export default LinkedList;
