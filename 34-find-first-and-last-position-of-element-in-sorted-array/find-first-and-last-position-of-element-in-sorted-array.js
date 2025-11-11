/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function findBoundary(findFirst){
    //Find First And Last Position  of Element in Sorted Array
    let low = 0;
    let high = nums.length -1; 
    let index = -1;
    while(low <= high){
    let mid = Math.floor((low +high) / 2);
        if(nums[mid] === target){
            index = mid;
            if(findFirst) high = mid -1;
           else  low = mid + 1;
       } else if(nums[mid] < target){
        low = mid + 1;
    }else{
        high = mid - 1;
      }
    }
    return index;
    }
    let first = findBoundary(true);
    let last = findBoundary(false);
    return [first, last];
};