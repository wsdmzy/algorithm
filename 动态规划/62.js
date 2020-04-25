/**
 * 62. 不同路径
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

 /**
  * 1. 状态 dp[i][j] i，j的网格总路径
  * 2. 状态转移方程  dp[i][j] = dp[i-1][j]+dp[i][j-1]
  */

var uniquePaths = function(m, n) {
  let dp = new Array(m+1).fill(1).map(() => new Array(n+1).fill(1))
  
  for (let i = 2; i <= m; i++) {
    for (let j = 2; j <= n; j++) {
      
      dp[i][j] = dp[i-1][j]+dp[i][j-1]
    }
  } 
  return dp[m][n]
};


console.log(uniquePaths(3,2))
console.log(uniquePaths(7,3))
console.log(uniquePaths(1,1))