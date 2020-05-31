// 希尔排序


function shell(arr) {
  let n = arr.length
  if (n <=1) return arr

  let gap = n >> 1
  while (gap >= 1) {
    for (let i = gap; i < n; i++) { 
      let tmp = arr[i]
      let j = i
      while (arr[j-gap] > tmp && j > 0) { //移动元素，找到要插入的正确的位置
        arr[j] = arr[j-gap]
        j -= gap
      }
      arr[j] = tmp //插入数据
    }
    gap = gap >> 1
  }
  return arr
}

console.log(shell([4,5,6,3,2,1]))