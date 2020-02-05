function setup() {
  createCanvas(1000, 1000);
  background('#80130A');
  stroke('#ffffff');
  strokeWeight(4);
  textStyle(BOLD);
  textSize(14);
  textFont('Nunito');

  const tree = new Tree();

  tree
    .insert(new Node(10))
    .insert(new Node(5))
    .insert(new Node(15));

  console.log(tree);

  document.getElementById('insertNode').addEventListener('submit', e => {
    e.preventDefault();
    tree.insert(new Node(parseInt(e.target.node.value, 10)));
    tree.bfs();
    // e.target.node.value = null;
  });
}
