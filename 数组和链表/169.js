/**
 * @param {number[]} nums
 * @return {number}
 * 169. 多数元素
 * 
 * 多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * map?  O(n)
 * 
 * 出现一半以上？
 * 
 */
var majorityElement = function(nums) {
  let map = new Map()
  let max = 0, n = nums.length, res
  if (n === 1) return nums[0]
  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i])+1)
      if (map.get(nums[i]) > max) {
        max = map.get(nums[i])
        res = nums[i]
      }
    } else {
      map.set(nums[i], 1)
    }
  }
  return res
};


// 摩尔投票法   O(n)   O(1)
var majorityElement = function(nums) {
  let res 
  let count = 0, n = nums.length
  for (let i = 0; i < n; i++) {
    if (count === 0) res = nums[i]
    count += (res == nums[i]) ? 1 : -1
  }
  return res
}

// console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([6,6,6,7,7]))