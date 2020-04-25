/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 回溯
 */
var combine = function(n, k) {
  let res = []
  let temp = []
  helper(temp,1)
  return res 

  function helper(temp, start) {
    if (temp.length === k) {
      res.push(temp)
      return 
    }

    for (let i = start; i <= n; i++) {
      temp.push(i)
      helper(temp.slice(),i+1)
      temp.pop()
    }
  }
};

console.log(combine(4,2))