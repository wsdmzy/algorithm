function TreeNode(val) {
  this.val = val;
  this.left = null
  this.right = null
}

// 递归解题
// var inorderTraversal = function(root) {
//   let res = []
//   var inorderTraversalNode = function(node) {
//     if (node !== null) {
//       inorderTraversalNode(node.left)
//       res.push(node.val)
//       inorderTraversalNode(node.right)
//     }
//   }
//   inorderTraversalNode(root)
//   return res
// }

// 栈实现
var inorderTraversal = function(root) {
  var stack = []
  var res = []
  cur = root
  while (stack.length > 0 || cur !== null) {
    if (cur !== null) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      res.push(cur.val)
      cur = cur.right
    } 
  }
  return res
}






var a1 = new TreeNode(1)
var a2 = new TreeNode(2)
var a3 = new TreeNode(3)

a3.left = a1
a3.right = a2

console.log(inorderTraversal(a3))