# Day 3 [MEDIUM]

This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

```JavaScript
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

The following test should pass:

```JavaScript
// Setup nodes
let leftNode = new Node("left", new Node("left.left"));
let rightNode = new Node("right");
let node = new Node("root", leftNode, rightNode);

// Test
assert(deserialize(serialize(node)).left.left.val === "left.left");
```
