/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    /// Minimum Difference Between Highest and Lowest of K Scores:
     ///I am going to return the minimum of two numbers after doing the difference between them :
     if(k === 1)return 0;
    nums.sort((a, b) => a -b);
    let dif = Infinity;
    for(let i = 0; i <= nums.length - k; i++){
        let d = nums[i + k -1] - nums[i];
        dif = Math.min(dif, d);
}    
     return dif;
};