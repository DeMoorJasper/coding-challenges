// In JavaScript it's probably easier to just JSON.stringify and JSON.parse this stuff...
// But the question was originally a python question where this is kinda not such a core thing.
// Not really happy about my solution though... Was good practise though.

const assert = require("assert");

// Node Class
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  serialize() {
    return `(${this.val})[${this.left ? this.left.serialize() : " "},${
      this.right ? this.right.serialize() : " "
    }]`;
  }

  static deserialize(str) {
    if (!str || str === ' ') return;

    let seperate = str.match(
      /^\(([^\)]+)\)\[((\(\S+\)\[.*\])| ),((\(\S+\)\[.*\])| )\]$/
    );

    if (seperate && seperate[4]) {
      return new Node(
        seperate[1],
        Node.deserialize(seperate[2]),
        Node.deserialize(seperate[4])
      );
    }

    return null;
  }
}

// Setup nodes
let leftNode = new Node("left", new Node("left.left"));
let rightNode = new Node("right");
let node = new Node("root", leftNode, rightNode);

// Test
let passed = assert(Node.deserialize(node.serialize()).left.left.val === "left.left");
console.log('Test Passed!');
