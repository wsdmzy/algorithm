// 冒泡排序

function buble(arr) {
  let n = arr.length
  if (n <=1) return arr
  for (let i = 0; i < n; i++) {  //控制冒泡次数
    let flag = false  //优化   
    for(let j = 0; j < n-1-i; j++) {  //冒泡的元素
      if (arr[j] > arr[j+1]) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        flag = true
      }
    }
    if (!flag) break  //没有数据交换提前退出
  }
  return arr
}

console.log(buble([4,5,6,3,2,1]))
