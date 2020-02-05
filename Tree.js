class Tree {
  constructor(root) {
    this.root = root;
  }

  get root() {
    return this._root;
  }

  set root(node) {
    this._root = node;
  }

  prepareTreeForInsert(node = this.root, val) {
    if (!node) return;
    if (node !== this.root) {
      if (node.val >= val && val > this.root.val) {
        node.setCoords(node.x + 40, node.y);
      } else if (node.val < val && val <= this.root.val) {
        node.setCoords(node.x - 40, node.y);
      }
    }
    this.prepareTreeForInsert(node.left, val);
    this.prepareTreeForInsert(node.right, val);
  }

  redraw() {
    background("#43AEDD");

    const dfsRedraw = (node = this.root, parent) => {
      if (!node) return;
      dfsRedraw(node.left, node);
      if (parent) {
        line(node.x, node.y, parent.x, parent.y);
      }
      ellipse(node.x, node.y, 35, 35);
      textAlign(CENTER);
      text(node.val, node.x, node.y);

      dfsRedraw(node.right, node);
    };

    dfsRedraw();
  }

  insert(nodeToInsert) {
    this.prepareTreeForInsert(this.root, nodeToInsert.val);

    if (!this.root) {
      nodeToInsert.setCoords(10000 / 2, 50);
      this.root = nodeToInsert;
      this.redraw();
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
          nodeToInsert.setCoords(currentNode.x - 40, currentNode.y + 50);
          currentNode.left = nodeToInsert;
          break;
        }
      } else if (nodeToInsert.val > currentNode.val) {
        if (currentNode.right) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else {
          nodeToInsert.setCoords(currentNode.x + 40, currentNode.y + 50);
          currentNode.right = nodeToInsert;
          break;
        }
      }
    }

    this.redraw();
    return this;
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
        if (currentNode.left && !isNaN(currentNode.left.val)) {
          queue.push(currentNode.left);
        }

        if (currentNode.right && !isNaN(currentNode.right.val)) {
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
