/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let maxEnd = nums[0];
  for(let i = 1; i < nums.length; i++){
    maxEnd = Math.max(nums[i], maxEnd + nums[i]);
    max = Math.max(max, maxEnd);
  }
  return max; 
};