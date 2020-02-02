class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.x = null;
    this.y = null;
  }

  setCoords = (x, y) => {
    this.x = x;
    this.y = y;
    text(this.val, x, y);
  };
}
