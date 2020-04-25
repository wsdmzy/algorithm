/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 * candidates 中的每个数字在每个组合中只能使用一次。=> i+1
 * 
 * 解集不能包含重复的组合。 => 将相邻两个相同的元素只取前一个去组合  i > start
 * 
 */
var combinationSum2 = function(candidates, target) {
  let len = candidates.length
  let res = []
  candidates.sort((a,b) => a-b)
  let temp = []
  helper(temp, target, 0)
  return res

  function helper(temp, target, start) {
    if (target === 0 ) {
      res.push(temp)
      return
    }

    for (let i = start; i < len; i++) {
      if (target < candidates[i]) return
      // 如果和前面一个元素相等并且不是start，则跳过
      if(i > start && candidates[i] == candidates[i-1]) continue;
      temp.push(candidates[i])
      helper(temp.slice(),target-candidates[i],i+1)
      temp.pop()
    }

  }

};

var candidates = [10,1,2,7,6,1,5], target = 8

console.log(combinationSum2(candidates,target))