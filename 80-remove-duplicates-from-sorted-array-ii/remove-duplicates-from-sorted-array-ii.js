/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 3) return nums.length;
    let value = 2;
    for(let i =2 ; i <nums.length;i++){
        if(nums[i] != nums[value -2]){
            nums[value++] = nums[i];
        }
    }
    return value;
};