/**
 * @param {number[]} nums
 * @return {number}
 * 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 * [0,1,3]  2
 */

// o(n)
var missingNumber = function(nums) {
  let len = nums.length
  // 0 - len-1
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i) {
      return nums[i]
    }
  }
  return len
};

// 二分查找
// mid ?  i j 指向两端
// j > i  return i
var missingNumber = function(nums) {
  let len = nums.length
  let i = 0, j = len-1
  let mid 
  while (i <= j) {
    mid = (i+j) >> 1
    if (mid === nums[mid]) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  return i
}