>动态规划在寻找有很多重叠子问题的情况的最佳解时有效。它将问题重新组合成子问题。为了避免多次解决这些子问题，它们的结果都逐渐被计算并被储存，从简单的问题直到整个问题都被解决。因此，动态规划储存递迴时的结果，因而不会在解决同样的问题时花费时间。动态规划只能应用于有最佳子结构的问题。最佳子结构的意思是局部最佳解能决定全域最佳解（对有些问题这个要求并不能完全满足，故有时需要引入一定的近似）。简单地说，问题能够分解成子问题来解决。


情况:
  问题的答案依赖于问题的规模​，也就是问题的所有答案构成了一个数列。
  大规模问题的答案可以由小规模问题的答案递推得到，

步骤:
  0. 找状态
  1. 建立状态转移方程
  2. 缓存并复用以往结果
  3. 按顺序从小往大算

线性DP；
区间DP；
背包DP；
树形DP；
状态压缩DP；
数位DP；
计数型DP；
递推型DP；
概率型DP；
博弈型DP；
记忆化搜索；




