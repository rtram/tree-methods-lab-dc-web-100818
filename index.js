function inOrder(rootNode) {
  let currentNode = rootNode
  if (currentNode.left) {
    currentNode = currentNode.left
    inOrder(currentNode)
  } else {
    console.log(currentNode.data)
    if (currentNode.right) {
      
    }
  }
}