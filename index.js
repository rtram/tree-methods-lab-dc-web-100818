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
  console.log('hello')
  if (newNode.data < currentNode.data) {
    if (currentNode.left) {
      return findOrAdd(currentNode.left, newNode)  
    } else {
      currentNode.left = newNode
    }
  } else if (newNode.data > currentNode.data) {
    if (currentNode.right) {
      return findOrAdd(currentNode.right, newNode)  
    } else {
      currentNode.right = newNode
    } 
  } else {
      return true
    }
}