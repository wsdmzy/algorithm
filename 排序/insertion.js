// 插入排序  已排序区间和未排序区间

function insertionSort(arr) {
  let n = arr.length
  if (n <= 1) return arr
  for (let i = 1; i < n; i++) {  //未排序区间
    let tmp = arr[i]// 要插入的数据
    let j = i - 1
    for (; j >= 0; j--) {//已排序区间
      if (arr[j] > tmp) {  //移动元素
        arr[j + 1] = arr[j]
      } else {  //找到位置了
        break
      }
    }
    arr[j+1] = tmp //插入数据
  }
  return arr
}

console.log(insertionSort([4, 5, 6, 3, 2, 1]))