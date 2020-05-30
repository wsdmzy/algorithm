/**
 * @param {string} s
 * @return {number}
 * 最长回文子序列
 * "bbbab" => bbbb   4
 * "cbbd"  => bb   2
 *  动态规划
 *    状态： dp[i][j]  表示 i~j 回文串的length
 *     转换方程: s[i]==s[j] => dp[i][j]+2
 *                  !=     =>  Math.max(dp[i+1][j], dp[i][j-1])
 */
var longestPalindromeSubseq = function(s) {
  let n = s.length
  let dp = Array.from(new Array(n), () => new Array(n).fill(0))
  // 遍历所有情况
  for (let i=n-1; i >= 0; i--) {
    dp[i][i] = 1 ///单个字符
    for (let j=i+1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i+1][j-1] + 2
      } else {
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
      }
    }
  }
  // 0~n-
  return dp[0][n-1]
};


