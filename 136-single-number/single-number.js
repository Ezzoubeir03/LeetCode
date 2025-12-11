/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //single Number :
    //non-empty array:
    ///the out put is the single element that only exist in the array :
    let result = 0;
    for(let num of nums){
    result ^= num;
    }
    return result;
};