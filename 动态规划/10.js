/**
 * 10. 正则表达式匹配
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * abb
 * ab*
 */


/**
 * .  匹配任意单个字符
 * *  匹配零个或多个前面的那一个元素
 * 
 * 1. 找状态  dp[i][j]  p的前i个字符和s的前j个字符匹配结果, Pi,Sj,m(i,j)单个字符Pi和Sj的匹配结果
 * 2. 状态转移方程  dp[i][j] = dp[i-1][j-1]&m(i,j)    Pi = x
 * 2. 状态转移方程  dp[i][j] = dp[i-2,j] | dp[i-1][j] | dp[i][j-1]&m(i-1,j)    Pi = *
 */


var isMatch = function(s, p) {
  let len1 = s.length+1
  let len2 = p.length+1
  let dp = new Array(len1).fill(false).map(() => new Array(len2).fill(false))
  dp[0][0] = true
  p = '_' + p
  s = '_' + s
  for (let i = 1; i < len2; i++) {
    if (p[i] === '*') {
      dp[i][0] = dp[i-2][0]
    }

    for (let j = 1; j < len1; j++) {
      dp[i][j] = f(p,i,s,j,dp)
    }

  }
};