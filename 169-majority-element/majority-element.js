/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    

    ///Majority Element:
    

    //our goals is to return the majority element

    nums.sort((a,b)=> a - b);
    return nums[Math.floor(nums.length / 2)];
    };