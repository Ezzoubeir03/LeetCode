/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    ///Maximum Total Subarray Value I
    let numsMax = nums[0];
    let numsMin = nums[0];
    //let sor = nums.sort((a, b) => a- b);
    //let sum = 0;
      // for(let i = 0; i <= nums.length; i++){

    //}
    for(let num of nums){
        numsMax = Math.max(numsMax, num);
        numsMin = Math.min(numsMin, num);
    }

    let dif = numsMax - numsMin;
    return dif * k;
    };