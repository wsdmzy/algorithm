/**
 * 
 * 数组中的第K个最大元素
 *  [3,2,1,5,6,4] 和 k = 2 => 5
 * 
 *  快排的思想？  数组中的第K个最大元素  ->  排序后的下标n-k
 *  分区  q === n-k  nums[q]   
 *          >  quick(p,q-1)
 *          < quick(q+1,r)
 */

var findKthLargest = function(nums, k) {
  let n = nums.length
  let res
  quick(0,n-1)

  function quick(p,r) {
    if (p > r) return
    let q = partiton(nums,p,r)
    // console.log(q)
    if (q === n-k) {
      res = nums[q]
      return
    } else if (q > n-k) { //6-1 = 5
      quick(p,q-1)
    } else {
      quick(q+1,r)
    }
  }
  // console.log(nums)
  return res
};

function partiton(nums, left, right) {
  let piovt = nums[right]
  let j = left
  for (let i = left; i < right; i++) {
    if (nums[i] < piovt) {
      [nums[i],nums[j]] = [nums[j],nums[i]]
      j +=1
    }
  }
  [nums[right],nums[j]] = [nums[j],nums[right]]
  return j
}


console.log(findKthLargest([-1,2,0],1))