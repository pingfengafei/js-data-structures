import {Node} from '../../../src/structures/linkedList';

describe('Node', () => {
  it('node', () => {
    const nodeA = new Node('foo');
    expect(nodeA.element).toEqual('foo');
    expect(nodeA.next).toEqual(undefined);

    const nodeB = new Node('bar');
    nodeA.next = nodeB;
    expect(nodeA.next.element).toEqual('bar');
    expect(nodeA.next.next).toEqual(undefined);
  })
})
