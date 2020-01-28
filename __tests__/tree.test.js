const BinarySearchTree = require('../tree/tree');
describe('BinarySearchTree', () => {
  it('can successfully initiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toEqual(null);
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearchTree();
    tree.add('123');
    expect(tree.root).toEqual({ left: null, right: null, value: '123' });
  });
})
;
