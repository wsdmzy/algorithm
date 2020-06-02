// 查找第一个值等于给定值的元素 [1,3,4,5,6,7,8,8,8,11,18]  查找第一个8

function bsearch(arr, num) {
  
  let low = 0, high = arr.length-1

  while (low <= high) {
    let mid = low + ((high-low) >> 1)
    if (arr[mid] > num) {
      high = mid - 1
    } else if (arr[mid] < num) {
      low = mid + 1
    } else {
      // console.log(mid)
      if (mid === 0 || arr[mid-1] !== num) {
        return mid
      } else {
        high = mid - 1
      }
    }
  }
}

console.log(bsearch([1,3,4,5,6,7,8,8,8,11,18],8))