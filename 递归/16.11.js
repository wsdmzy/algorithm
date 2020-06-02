/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 * 生成跳水板所有可能的长度。  返回的长度需要从小到大排列。
 * shorter = 1  longer = 2 k = 3    =>    {3,4,5,6}
 * fn = m*s + l/n   m+n=k
 */


// var divingBoard = function(shorter, longer, k) {
//   if (k === 0) return []
//   let res = []
//   for (let m = 0; m <= k; m++) {
//     let n = k - m
//     if (!res.includes(m*longer + n*shorter)) {
//       res.push(m*longer + n*shorter)
//     }
//   }
//   return res
// };


// 基于数组下标访问   基础值shorter*k，然后加上下标*tmp
var divingBoard = function(shorter, longer, k) {
  if (k===0) return []
  if (shorter===longer) return [shorter*k]
  // 全部为短
  let arr = new Array(k+1).fill(shorter*k)
  // 差值
  const tmp = longer - shorter
  arr.forEach((item,i) => {
    // i个长木板
    arr[i] = item + i *tmp
  })
  return arr
}



console.log(divingBoard(1,2,3))