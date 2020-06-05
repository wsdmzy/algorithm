/**
 * @param {number[]} nums
 * @return {number[][]}
 * 15. 三数之和
 *  nums = [-1, 0, 1, 2, -1, -4]  =>  [
                                        [-1, 0, 1],
                                        [-1, -1, 2]
                                      ]

    回溯？
 */

//  超时。。。。。。。。。
var threeSum = function(nums) {
  let res = []
  help()
  
  function help(start = 0, temp = []) {
    if (temp.length === 3) {
      if (temp.reduce((pre,val) => pre+val,0) === 0)  {
        temp.sort((a,b) => a-b)
        if (res.length === 0 ) {
          res.push(temp)
        } 
        if (res.some(item => JSON.stringify(item) === JSON.stringify(temp))){
          return
        }
        res.push(temp)
      }
      return
    }

    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i])
      help(i+1, temp.slice(0))
      temp.pop()
    }

  }
  return res
};


// 先排序，然后依次选中一个元素，改元素后面的数组用双指针来进行遍历，判断
var threeSum = function(nums) {
  let res = []
  nums.sort((a,b) => a-b)
  let n = nums.length
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break  //如果当前元素大于0，直接退出循坏
    if (i>0 && nums[i] == nums[i-1]) continue  //去重
    let low = i + 1, high = n - 1
    while (low < high) {
      if (nums[i]+nums[low]+nums[high] === 0) {
        res.push([nums[i], nums[low],nums[high]])
        while (low<high && nums[low] == nums[low+1]) low++ //去重
        while (low<high && nums[high] == nums[high-1]) high--//去重
        low++
        high--
      } else if (nums[i]+nums[low]+nums[high] < 0) {
        low++
      } else {
        high--
      }
    }
  }
  return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4] ))
console.log(threeSum([-1, 0, 1, 2, -1, -4] ))