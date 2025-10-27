/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    ////our goal to find the single number in the array :
    for(let i = 0 ; i <= nums.length; i++){
        let count = 0;
    for(let j = 0; j <= nums.length; j++){
        if(nums[i] === nums[j]){
            count++;
        }
    }
    if(count === 1){
        return nums[i];
       }
    } 
};