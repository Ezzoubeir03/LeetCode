/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    ////Minimum Operations to Make a Uni-Value Grid 

    let  nums = grid.flat();
    for(let num of nums){
        if((num - nums[0]) % x !== 0) return -1;
    }

   nums.sort((a, b) => a - b);

   let mid = nums[Math.floor(nums.length / 2)];

   let operators = 0;
   for(let num of nums){
    operators += Math.abs(num - mid) / x;
   }
   return operators;

};