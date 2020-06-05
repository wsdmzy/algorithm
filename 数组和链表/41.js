/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 41. 缺失的第一个正数
 * 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
 * [1,2,0] => 3
 * [3,4,-1,1] => 2
 * 
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。 ???? 
 * 
 * 计数排序？
 */
var firstMissingPositive = function(nums) {
  // 省略了 nums.push(0);
  let n = nums.length
  for (let i = 0; i <= n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i]] != nums[i]) {
      [nums[nums[i]],nums[i]] = [nums[i],nums[nums[i]]];
    }
  }

  for (let i = 1; i <= n; i++) {
    if (nums[i] != i) {
      return i
    }
  }

  return n+1
};

console.log(firstMissingPositive([3,4,-1,1]))