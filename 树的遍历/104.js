/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 104. 二叉树的最大深度
 * 递归？
 *  max=(leftMax,rightMax)+1
 */
var maxDepth = function(root) {

  if (!root) return 0

  function depth(node) {
    if (!node) return 0
    return Math.max(depth(node.left), depth(node.right)) + 1
  }

  return Math.max(depth(root.left), depth(root.right)) + 1
};