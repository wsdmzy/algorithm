/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 解集不能包含重复的子集。
 * 回溯  子集  i+1
 */
var subsets = function(nums) {
  let len = nums.length
  let res = []
  helper()

  return res


  function helper(temp = [], start = 0) {
    res.push(temp)
    if (temp.length === len) return
    for (let i = start; i < len; i++) {
      temp.push(nums[i])
      helper(temp.slice(), i+1)
      temp.pop()
    }

  }

};

console.log(subsets([1,2,3]))