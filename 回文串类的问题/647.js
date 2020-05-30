/**
 * @param {string} s
 * @return {number}
 *  回文子串
 *  "abc" =>  3   a  b c
 *  "aaa" =>  6   a a a aa aa aaa
 *  和第5题一样的思路最长回文子串   
 *   只需记录满足回文串的次数即可
 */
var countSubstrings = function(s) {
  let n = s.length
  let dp = Array.from(new Array(n), () => new Array(n).fill(0))
  let res = 0
  // 遍历所有情况
  for (let i = n-1; i >= 0; i --) {
    for (let j = i; j < n; j++) {
      if (s[i] == s[j] && (j-i < 2 || dp[i+1][j-1])) {//满足回文串
        dp[i][j] = true
        res++
      }
    }
  }
  return res
};