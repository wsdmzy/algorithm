var permute = function(nums) {
  let len = nums.length
 

  let res = []
  function helper(temp = [] ) {
    if (temp.length === len) {
      res.push(temp)
      return
    }   
    for (let i = 0; i < len; i++) {
      if (!temp.includes(nums[i])) {
        temp.push(nums[i])
        helper(temp.slice())
        temp.pop()
      }
    }
  }

  helper()

  return res
};