// 选择排序

function selectionSort(arr) {
  let n = arr.length
  if (n <= 1) return arr
  for (let i = 0; i < n-1; i++) {
    let min = i
    for (let j = i+1; j < n; j++) {
      if (arr[j] < arr[min]) min = j
    }
    [arr[min],arr[i]] = [arr[i],arr[min]]
  }
  return arr
}

console.log(selectionSort([4, 5, 6, 3, 2, 1]))