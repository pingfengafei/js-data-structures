import Deque from '../../../src/structures/queue';

describe('Deque', () => {
  let dequeue;

  it('constructor', () => {
    dequeue = new Deque([1, 'foo', false]);
    expect(dequeue.size()).toEqual(3);
  });

  it('addFront', () => {
    dequeue.addFront('hello world');
    expect(dequeue.peekFront()).toEqual('hello world');
  })

  it('addBack', () => {
    dequeue.addBack('react');
    expect(dequeue.peekBack()).toEqual('react');
    expect(dequeue.size()).toEqual(5);
  })

  it('removeFront', () => {
    const front = dequeue.removeFront();
    expect(dequeue.size()).toEqual(4);
    expect(front).toEqual('hello world');
  })

  it('removeBack', () => {
    const back = dequeue.removeBack();
    expect(dequeue.size()).toEqual(3);
    expect(back).toEqual('react');
  })

  it('peekFront', () => {
    expect(dequeue.peekFront()).toEqual(1);
  })

  it('peekBack', () => {
    expect(dequeue.peekBack()).toEqual(false);
  })
})
