function setup() {
  createCanvas(1000, 1000);
  background(100);
  stroke(0);

  const tree = new Tree();

  tree
    .insert(new Node(10))
    .insert(new Node(5))
    .insert(new Node(15))
    //   .insert(new Node(3))
    //   .insert(new Node(13))
    .insert(new Node(12));
  //   .insert(new Node(18))
  //   .insert(new Node(1))

  tree.bfs();

  tree.inOrderTraversal();
}

function draw() {
  clear();
}
