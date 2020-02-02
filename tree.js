class Tree {
  constructor(root) {
    this.root = root;
  }

  inOrderTraversal(node = this.root, prevX, prevY) {
    if (!node) return;
    let x = Math.random() * 1000;
    let y = Math.random() * 1000;
    if (prevX && prevY) {
      // line(x, y, prevX, prevY)
    }
    this.inOrderTraversal(node.left, x, y);
    // text(node.val, x, y)
    this.inOrderTraversal(node.right, x, y);
  }

  inOrderTraversal(node = this.root, val) {
    if (!node) return;
    console.log(node.val, val);
    this.inOrderTraversal(node.left, val);
    if (node !== this.root) {
      console.log('node.val', node.val);
      if (val > this.root.val && node.val >= val) {
        console.log('upping coords', node.val, val);
        node.setCoords(node.x + 100, node.y);
      } else if (val < this.root.val && node.val < val) {
        console.log('downing coords');
        node.setCoords(node.x - 100, node.y);
      }
    }
    this.inOrderTraversal(node.right, val);
  }

  insert(nodeToInsert) {
    clear();
    createCanvas(1000, 1000);
    background(100);
    stroke(0);
    if (!this.root) {
      nodeToInsert.setCoords(500, 50);
      this.root = nodeToInsert;
      return this;
    }

    let currentNode = this.root;
    let parentNode;

    while (currentNode) {
      parentNode = currentNode;
      if (nodeToInsert.val <= currentNode.val) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = nodeToInsert;
          currentNode.left.setCoords(parentNode.x - 50, parentNode.y + 50);
          // line(nodeToInsert.x, nodeToInsert.y, parentNode.x, parentNode.y);
          break;
        }
      } else if (nodeToInsert.val > currentNode.val) {
        if (currentNode.right) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else {
          currentNode.right = nodeToInsert;
          currentNode.right.setCoords(parentNode.x + 50, parentNode.y + 50);

          // line(nodeToInsert.x, nodeToInsert.y, parentNode.x, parentNode.y);

          break;
        }
      }
    }

    // background(100);

    this.inOrderTraversal(this.root, nodeToInsert.val);
    return this;
  }

  get root() {
    return this._root;
  }

  set root(node) {
    this._root = node;
  }

  bfs() {
    let queue = [];
    queue.push(this.root);

    let result = [];

    while (queue.length) {
      let temp = [];
      let size = queue.length;

      for (let i = 0; i < size; i++) {
        let currentNode = queue[0];
        temp.push(currentNode.val);
        if (currentNode.left && currentNode.left.val) {
          queue.push(currentNode.left);
        }

        if (currentNode.right && currentNode.right.val) {
          queue.push(currentNode.right);
        }
        queue.shift();
      }

      result.push(temp);
    }

    console.log(result);
    return result;
  }
}
