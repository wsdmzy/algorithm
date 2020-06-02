/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 33. 搜索旋转排序数组
 * 
 * nums = [4,5,6,7,0,1,2], target = 0  => 4
 * 以数组中间点为分区的话，会将数组分成一个有序数组和一个循坏有序数组
 * 1. 首元素<mid 前 有序
 * 2. 首元素>mid 后 有序
 * 目标元素在有序数组中，二分查找
 * 在循坏数组中，设定数组边界，继续查找
 */
var search = function(nums, target) {
  let low = 0, high = nums.length-1
  let res = -1

  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    // console.log(low, high)
    
    if (nums[mid] === target) {
      return mid
    } else if (nums[low] < nums[mid] && target < nums[mid] &&  target >= nums[low]) {
      // console.log(low,mid, '+++')
      help(low, mid)
      return res
    } else if (nums[low] <= nums[mid] ) {
      // console.log('+++')
      low = mid + 1
    } else if (nums[low] > nums[mid] && target > nums[mid] && target <= nums[high]) {
      // console.log(mid,high, '---')
      help(mid,high)
      return res
    } else if (nums[low] >= nums[mid] ) {
      // console.log('---')
      high = mid - 1
    } else {
      return res
    }
  }

  function help(l, h) {
    while (l <= h) {
      let m = l + ((h-l)>>1)
      if (nums[m] === target) {
        res = m
        return
      } else if (nums[m] > target) h = m - 1 
      else l = m + 1
    }
  }

  return res
}


console.log(search([4,5,6,7,0,1,2], 2))
console.log(search([1,3], 3))
console.log(search([3,1], 1))