/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //Search in Rotated Sorted Array:
    ////we have an integer array "nums" sorted in ascending order :
   //// 1 <= k <nums.length
    ///Our target to find the target by counting the nums in our array until we find the target:
    let left = 0;
    let right = nums.length -1 ;
    while(left <= right){ 
     let mid = Math.floor((left + right)/2);
        if(nums[mid] === target)
            return mid;
            if(nums[left] <= nums[mid]){
                if(target>= nums[left] && target < nums[mid]){
                    right = mid -1;
        
                }else{
                    left = mid + 1;
        }
     }
     else{
        if(target > nums[mid] && target <= nums[right]){
            left = mid + 1; 
        }else{
            right = mid - 1;
        }
     }
   }
    return -1;

};