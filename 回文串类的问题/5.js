/**
 * @param {string} s
 * @return {string}
 * 最长回文子串
 * "babad"  => bab    cbbd => bb
 *  动态规划  
 *    找状态  dp[i][j]  i~j是否为回文串
 *    转移方程  dp[i][j] = dp[i+1][j-1] && (Si === Sj)
 *    true max(j-i+1) true!
 */

//  O(n2)
var longestPalindrome = function(s) {
  let n = s.length
  let res = ''
  let dp = Array.from(new Array(n), () => new Array(n).fill(0))   //创建二维数组
  //遍历所有情况
  for (let i = n-1; i >= 0; i--) {
    for (let j = i; j < n; j++) {   
      // 状态转移方程 dp[i][j] = dp[i+1][j-1] && (Si === Sj)，，，边界问题j-i < 2 的时候 即一个字母 或两个字母
      dp[i][j] = s[i] == s[j] && (j -i < 2 || dp[i+1][j-1])
      // j-i+1  即为回文串的长度
      if ( dp[i][j] && j-i+1 > res.length) {
        res = s.substring(i, j+1)
      }
    }
  }
  return res
};