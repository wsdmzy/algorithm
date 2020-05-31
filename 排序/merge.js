// 归并排序

function mergeSort(arr){
  if (arr.length < 2) return arr
  // 分治
  const mid = arr.length >> 1
  let left = arr.slice(0,mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  // 
  let res = []
  let leftLen = left.length
  let rightLen = right.length
  let len = leftLen + rightLen
  for (let index = 0, i = 0, j = 0; index < len; index++) {
    if (i >= leftLen) res[index] = right[j++]   //left完
    else if (j >= rightLen) res[index] = left[i++] //right完
    else if (left[i] <= right[j]) res[index] = left[i++]  //left[i]入栈
    else { //right[i]入栈
      res[index] = right[j++]
    }
  }
  return res
}

console.log(mergeSort([4,5,6,3,2,1]))