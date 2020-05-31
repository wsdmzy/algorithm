// 快速排序

function quickSort(arr) {
  quick(arr,0, arr.length-1)

  function quick(arr, p, r) {
    if (p>= r) return
    let q = partiton(arr,p,r)

    quick(arr, p, q-1)
    quick(arr, q+1, r)
  }
  return arr
}

// 分区  每次分区都会找到一个元素的正确位置
function partiton(arr,left, right) {
  let poivt = arr[right]
  let j = left //已处理区间的下一个元素
  for (let i = left; i < right; i++) {
    if (arr[i] < poivt) {
      // 交换
      [arr[i],arr[j]] = [arr[j],arr[i]]
      j += 1  //尾部++
    }
  }
  [arr[right],arr[j]] = [arr[j],arr[right]]
  return j
}

console.log(quickSort([6,11,3,9,8]))