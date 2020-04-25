/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 * 
 * 
 * candidates 中的数字可以无限制重复被选取
 * 
 * 每个都是无限的。。。=> 下一个for循坏要从前一个元素开始
 */
// var combinationSum = function(candidates, target) {
//   let len = candidates.length
//   let res = []
//   let temp = []
//   helper(temp, target, 0)
//   return res


//   function helper(temp, target, start) {
//     if (target < 0) {
//       return 
//     }
//     if (target === 0) {
//       res.push(temp)
//       return
//     }

//     for (let i = start; i < len; i++) {
//       temp.push(candidates[i])
//       helper(temp.slice(),target-candidates[i],i)
//       temp.pop()
//     }

//   }

// };

/**
 * 剪枝
 */

var combinationSum = function(candidates, target) {
  let len = candidates.length
  let res = []
  let temp = []
  // 排序  升序  当
  candidates.sort((a,b) => a-b)
  helper(temp, target, 0)
  return res


  function helper(temp, target, start) {
    if (target < 0) {
      return 
    }
    if (target === 0) {
      res.push(temp)
      return
    }

    

    for (let i = start; i < len; i++) {
      // target小于当前数时 跳出本次循坏
      if (target < candidates[i]) break
      temp.push(candidates[i])
      helper(temp.slice(),target-candidates[i],i)
      temp.pop()
    }

  }

};


console.log(combinationSum([2,3,6,7],7))