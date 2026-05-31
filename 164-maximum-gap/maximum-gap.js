/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    ///Maximum Gap:

    if(nums.length < 2){
        return 0;
    }
    const sorted = [...nums].sort((a,b) => a- b); 

    let maxGap = 0;
        for(let i = 0; i < nums.length - 1; i++){
        ///we need to calculate the maximum gap between two elements in the array:

        let gap = sorted[i + 1] - sorted[i];
        maxGap = Math.max(maxGap, gap);

      }
    return maxGap;
};