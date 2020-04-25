function TreeNode(val) {
  this.val = val;
  this.left = null
  this.right = null
}

// 递归实现
// var preorderTraversal = function(root) {
//   let res = []
//   var preorderTraversalNode = function(node) {
//     if (node !== null) {
//       res.push(node.val)
//       preorderTraversalNode(node.left)
//       preorderTraversalNode(node.right)
//     }
//   }
//   preorderTraversalNode(root)
//   return res
// };

//  栈实现
var preorderTraversal = function(root) {
  let res = []
  let cur = root
  let stack = []
  while (stack.length > 0 || cur !== null) {
    if (cur !== null) {
      res.push(cur.val)
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      cur = cur.right
    }
  }
  return res
}

/**
 *   3
 * 1   2
 */

var a1 = new TreeNode(1)
var a2 = new TreeNode(2)
var a3 = new TreeNode(3)

a3.left = a1
a3.right = a2

console.log(preorderTraversal(a3))