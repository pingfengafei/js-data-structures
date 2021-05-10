export default class Node<T> {
  constructor(element: T) {
    this.element = element;
    this.next = undefined;
  }

  public element: T;
  public next: void | Node<T> = undefined;
}
