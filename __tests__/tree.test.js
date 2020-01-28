const BinarySearchTree = require('../tree/tree');
describe('BinarySearchTree', () => {
  it('can successfully initiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toEqual(null);
  });
    
})
;
