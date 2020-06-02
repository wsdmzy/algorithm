// 查找第一个大于等于给定值的元素 [1,3,4,5,6,7,8,8,8,11,18]  查找第一个大于等于2的元素

function bsearch(arr, num) {
  
  let low = 0, high = arr.length-1

  while (low <= high) {
    let mid = low + ((high-low) >> 1)
    if (arr[mid] >= num) {
      if (mid === 0 || arr[mid-1] < num) return mid
      else high = mid - 1
    } else {
      low = mid + 1
    } 
  }
  return -1
}

console.log(bsearch([1,3,4,5,6,7,8,8,8,11,18],2))