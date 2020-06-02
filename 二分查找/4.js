// 查找最后一个小于等于给定值的元素  3，5，6，8，9，10    7  => 6


function bsearch(arr, num) {
  
  let low = 0, high = arr.length-1

  while (low <= high) {

    let mid = low + ((high-low) >> 1)

    if (arr[mid] <= num) {
      if (mid === arr.length-1 || arr[mid+1] > num) return mid
      else low = mid + 1
    } else {
      high = mid - 1
    }

  }
  return -1
}

console.log(bsearch([3,5,6,8,9,10],7))