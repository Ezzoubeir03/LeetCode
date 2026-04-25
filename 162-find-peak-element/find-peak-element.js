/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let max = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > nums[max]){
        max = i;
    }
  }
  return max;
};