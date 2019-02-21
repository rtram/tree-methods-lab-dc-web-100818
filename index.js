function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left)
  }
    console.log(currentNode.data)
  if (currentNode.right) {
    inOrder(currentNode.right)
  }
}

function findOrAdd(currentNode, newNode) {
  if (newNode.data < currentNode.data) {
    if (currentNode.left) {
      findOrAdd(currentNode.left, newNode)  
    } else {
      currentNode.left = newNode
    }
  } else if (newNode.data > currentNode.data) {
    if (currentNode.right) {
      findOrAdd(currentNode.right, newNode)  
    } else {
      currentNode.right = newNode
    } 
  } else {
    console.log(currentNode.data, newNode.data)
      return true
    }
}