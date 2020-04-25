/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 将相邻两个相同的元素只取前一个去组合
 * 
 */
var permuteUnique = function(nums) {
  let len = nums.length
  nums.sort((a,b) => a-b)
  let res = []
  let temp = []
  let idx = []
  helper(temp,idx)
  return res


  function helper(temp,idx) {
    if (temp.length === len) {
      res.push(temp)
      return 
    }

    for (let i = 0; i < len; i++) {
      if (nums[i] === nums[i-1] && idx.includes(i-1)) {
        continue
      }
      if (!idx.includes(i)) {
        temp.push(nums[i])
        idx.push(i)
        helper(temp.slice(),idx.slice())
        temp.pop()
        idx.pop()
      }
    }

  }

};

console.log(permuteUnique([1,1,2]))