/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

  nums.sort((a, b) =>a - b);
    ////Find Minimum in Rotated Sorted Array: 
    for(let i = 0; i <= nums.length -1; i++){
        if(nums[i] > nums[i+1]){
         return nums[i + 1];
        }
         
     }  
  return nums[0];
};