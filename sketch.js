function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke('#ffffff');
  background('#43AEDD');
  const tree = new Tree();

  tree;

  console.log(tree);

  document.getElementById('insertNode').addEventListener('submit', e => {
    e.preventDefault();
    tree.insert(new Node(parseInt(e.target.node.value, 10)));
    tree.bfs();
    //    e.target.node.value = null;
  });
}
