/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
//Sort Colors :
/// we have three coloes here: red , white, blue:
// red: 0, whiite: 1, blue: 2:
 
 let low = 0; 
 let mid = 0;
 let high = nums.length - 1;

while(mid <= high){
    if(nums[mid] === 0){
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
         low++;
         mid++;
    }else if(nums[mid] === 1){
        mid++;
    }else{
        [nums[mid], nums[high]] = [nums[high], nums[mid]];
        high--;
        }
    }
};