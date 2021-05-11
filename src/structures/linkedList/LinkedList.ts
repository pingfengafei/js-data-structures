import Node from './Node';
import {isEqual as defaultIsEqual} from '../../helpers';

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

      return;
    }

    if (position === 0) {
      const restList = this.head;
      this.head = node;
      this.head.next = restList;
    }

    const prevNode = this.getElementAt(position - 1);

    if (prevNode) {
      const restList = prevNode.next;
      prevNode.next = node;
      node.next = restList;
    }
  }

  public size() {
    return this.count;
  }

  public getElementAt(position): void | Node<T> {
    if (position <= 0 || !this.head) {
      return this.head;
    }

    if (position >= this.count) {
      return undefined;
    }

    let target: void | Node<T> = this.head;
    let sentinel = 0;

    while (sentinel < position && target) {
      ++sentinel;
      target = target.next;
    }

    return target;
  }

  // remove the first meet element
  public remove(element: T, isEqual: Function = defaultIsEqual) {
    if (!this.head || !element) {
      return; // undefined
    }

    let target = this.head;

    if (isEqual(target, element)) { //head node equals to element
      this.head.next ? this.head = this.head.next : this.head = undefined;
      --this.count;

      return;
    }

    let prev;

    while (target) {
      prev = target;
      target = target.next ? target.next : undefined;

      if (isEqual(target, element)) {
        prev.next = target.next;
        --this.count;
        return;
      }
    }
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
