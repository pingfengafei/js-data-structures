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
  });

  describe('getElementAt', () => {
    let list = new LinkedList();

    it('return undefined', () => {
      expect(list.getElementAt(-1)).toEqual(undefined);
      expect(list.getElementAt(10)).toEqual(undefined);
    })

    it('return node', () => {
      list.insert(new Node(1));
      list.insert(new Node(2));
      list.insert(new Node(3));

      expect(list.toString()).toEqual('1,2,3')
      expect((list.getElementAt(0) as Node<any>).element).toEqual(1);
      expect((list.getElementAt(1) as Node<any>).element).toEqual(2);
      expect((list.getElementAt(2) as Node<any>).element).toEqual(3);
      expect(list.size()).toEqual(3);

      list.insert(new Node(0), 0);
      expect(list.toString()).toEqual('0,1,2,3');
      expect(list.size()).toEqual(4);

      list.insert(new Node(4), 3);
      expect(list.toString()).toEqual('0,1,2,4,3');
      expect(list.size()).toEqual(5);
    })
  })

  describe('remove', () => {
    let list = new LinkedList()

    it('empty list', () => {
      list.remove(new Node(1));
      expect(list.toString()).toEqual('')
    });

    it('found target', () => {
      list.push(new Node(1));
      list.push(new Node(2));
      list.push(new Node(3));

      list.remove(4);
      expect(list.toString()).toEqual('1,2,3');
      list.remove(1);
      expect(list.toString()).toEqual('2,3');
      list.remove(3);
      expect(list.toString()).toEqual('2');
      list.remove(2);
      expect(list.toString()).toEqual('');

      list.push(new Node(1));
      list.push(new Node(2));
      list.push(new Node(3));
      list.remove(2);
      expect(list.toString()).toEqual('1,3')
    });

    it('customized isEqual', () => {
      const isEqual = (node, element) => node?.element.key === element;

      list = new LinkedList();
      list.push(new Node({key: 1, value: 1}));
      list.push(new Node({key: 2, value: 2}));
      list.push(new Node({key: 3, value: 3}));

      list.remove(4, isEqual);
      expect(list.size()).toEqual(3);
      list.remove(2, isEqual);
      expect(list.size()).toEqual(2);
      list.remove(1, isEqual);
      expect(list.size()).toEqual(1);
      list.remove(3, isEqual);
      expect(list.size()).toEqual(0);
    });
  })

  describe('removeAt', () => {
    const list = new LinkedList(new Node(1));
    it('invalid position', (done) => {
      try {
        list.removeAt(-1)
      } catch (err) {
        expect(err.message).toEqual('invalid position')
        done()
      }
    })
  })
})
