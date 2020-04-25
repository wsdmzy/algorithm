function TreeNode(val) {
  this.val = val;
  this.left = null
  this.right = null
}

// 递归实现
// var postorderTraversal = function(root) {
//   let res = []
//   var postorderTraversalNode = function(node) {
//     if (node !== null) {
//       postorderTraversalNode(node.left)
//       postorderTraversalNode(node.right)
//       res.push(node.val)
//     }
//   }
//   postorderTraversalNode(root)
//   return res
// };

// 栈实现   前序的的翻版
var postorderTraversal = function(root) {
  let res = []
  let stack = []
  while (root || stack.length) {
    res.unshift(root.val)
    if(root.left) stack.push(root.left)
    if(root.right) stack.push(root.right)
    root = stack.pop()
  }
  return res
}




// 栈  标记访问法
// var postorderTraversal = function(root) {
//   var a = false; //用a记录是否访问过  false 入栈  true 出栈访问
//   var res = []
//   var stack = []
//   stack.push([a,root])
//   while (stack.length > 0) {
//     var [a, node] = stack.pop()
//     if (node === null) continue
//     if (!a) {
//       stack.push([!a, node])
//       stack.push([a, node.right])
//       stack.push([a, node.left])
//     } else {
//       res.push(node.val)
//     }
//   }
//   return res
// }




var a1 = new TreeNode(1)
var a2 = new TreeNode(2)
var a3 = new TreeNode(3)

a3.left = a1
a3.right = a2

console.log(postorderTraversal(a3))



/**
 * 大佬的思路清奇, 简单, 灵活, 简直就是前序遍历的翻版
  每次先入左节点, 然后入右节点
  每次把值都插到数组的最前面
 */