// 堆排序

function heapSort(arr) {
  let n = arr.length
  // 构建大顶堆
  for (let i = n >> 1; i >= 0; i--) { //从第一个非叶子节点构建
    adjustHeap(i,n)  
  }

  // 调整堆结构+交换堆顶元素和末尾元素
  for (let j = n-1; j > 0; j--) {
    [arr[0],arr[j]] = [arr[j],arr[0]]
    adjustHeap(0,j)
  }


  // 调整大顶堆
  function adjustHeap(i,len) {
    let tmp = arr[i]
    for (let k = 2*i+1; k < len; k = 2*k+1) {
      if (k+1 < len && arr[k+1] > arr[k]) {
        k++
      }
      if (arr[k] > tmp) {
        arr[i] = arr[k]
        i = k
      } else {
        break
      }
    }
    arr[i] = tmp
  }

  return arr
}


console.log(heapSort([2,1,3,4,6,5]))