function TreeNode(val) {
  this.val = val;
  this.left = null
  this.right = null
}

// 递归实现
// var levelOrder = function(root, floor = 0, arr = []) {
//   if (!root) return arr
  
  
//   if (arr[floor]) arr[floor].push(root.val)
//   else arr[floor] = [root.val]
  
//   levelOrder(root.left, floor+1, arr)

//   levelOrder(root.right, floor+1, arr)
  
//   return arr
// }



// 层序遍历  BFS
var levelOrder = function(root) {
  if (!root) return []
  let res = [], queue = [root]
  while (queue.length) {
    let arr = [], temp = []
    while (queue.length) {
      let cur = queue.shift()
      arr.push(cur.val)
      if (cur.left) temp.push(cur.left)
      if (cur.right) temp.push(cur.right)
    }
    queue = temp
    res.push(arr)
  }
  return res
};



var a1 = new TreeNode(1)
var a2 = new TreeNode(2)
var a3 = new TreeNode(3)

a3.left = a1
a3.right = a2

console.log(levelOrder(a3))