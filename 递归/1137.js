/**
 * @param {number} n
 * @return {number}
 *  第 N 个泰波那契数
 * 
 *  Tn+3 = Tn + Tn+1 + Tn+2
 * 
 */

// var tribonacci = function(n) {
//   if (n===0) return 0
//   if (n===1) return 1
//   if (n===2) return 1
//   let map = new Map()
//   // 缓存部分情况  提高性能
//   if (map.has(n)) {
//     return map.get(n)
//   } 
//   let res = tribonacci(n-3)+tribonacci(n-2)+tribonacci(n-1)
//   map.set(n, res)
//   return  res
// };


// var tribonacci = function(n) {
//   if (n===0) return 0
//   if (n===1) return 1
//   if (n===2) return 1
//   let cache = [0,1,1]
//   for (let i = 3; i <= n; i++) {
//     let tmp = cache[i-3]+cache[i-2]+cache[i-1]
//     cache.push(tmp)
//   }
//   return cache[n]
// }

// 空间复杂度优化O(1)
var tribonacci = function(n) {
  if (n===0) return 0
  if (n===1) return 1
  if (n===2) return 1
  let a=0,b=1,c=1
  let res 
  for (let i = 3; i <= n; i++) {
    res = a+b+c
    a=b
    b=c
    c=res
  }
  return res
}

console.log(tribonacci(4))
console.log(tribonacci(25))