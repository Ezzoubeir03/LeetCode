/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let minDist = Infinity;
    ///if(nums.length === 1 || nums === target){
       // return 0;
       if(target === 1 && nums.every(num => num === 1)){
        return 0;
       }
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] === target){
        minDist = Math.min(minDist, Math.abs(i - start));
        }
    }
    return minDist;
};