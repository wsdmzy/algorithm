/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 解集不能包含重复的子集。=> 
 */
var subsetsWithDup = function(nums) {
  let len = nums.length
  let res = []
  nums.sort((a,b) => a-b)
  helper()

  return res


  function helper(temp = [], start = 0) {
    res.push(temp)
    if (temp.length === len) return
    for (let i = start; i < len; i++) {
      if (i > start && nums[i] === nums[i-1]) continue
      temp.push(nums[i])
      helper(temp.slice(), i+1)
      temp.pop()
    }
  }
};

console.log(subsetsWithDup([1,2,2]))