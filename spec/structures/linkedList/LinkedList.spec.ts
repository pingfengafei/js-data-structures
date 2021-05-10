import LinkedList from '../../../src/structures/linkedList';
import {Node} from '../../../src/structures/linkedList';

describe('LinkedList', () => {
  let list;
  it('constructor', () => {
    list = new LinkedList();

    expect(list.size()).toEqual(0);

    list = new LinkedList(new Node(1));
    expect(list.size()).toEqual(1);
    list.push(new Node(2));
    list.push(new Node(3));
    expect(list.size()).toEqual(3)
  });

  describe('insert', () => {
    let list = new LinkedList();

    it('throw error when node is empty', (done) => {
      try {
        list.insert(undefined);
      } catch (err) {
        expect(err.message).toEqual('invalid node')
        done();
      }
    });

    it('push to the tail when position is empty or exceed list size', () => {
      list.insert(new Node(1));
      expect(list.size()).toEqual(1);
      list.insert(new Node(2), 100);
      expect(list.size()).toEqual(2);
    });

    it('insert at head', () => {
      list = new LinkedList(new Node(1));
      list.insert(new Node(2), 0);
      expect(list.toString()).toEqual('2,1');
    });
    it('insert at middle', () => {
      list = new LinkedList(new Node(1));
      list.push(new Node(2))
      list.insert(new Node(3), 1);
      expect(list.toString()).toEqual('1,3,2');
    });
    it('insert at tail', () => {
      list = new LinkedList(new Node(1));
      list.push(new Node(2))
      list.insert(new Node(3), 2);
      expect(list.toString()).toEqual('1,2,3');
    })
  })
})
