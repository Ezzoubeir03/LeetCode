/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    //Partition Array According to Given Pivot:

    let left = [];
    let equal = [];
    let right = [];

    for(let num of nums)
    {
        if(num < pivot){
            left.push(num);
        } else if(num === pivot){
            equal.push(num);
        } else {
            right.push(num);
        }
    }
     
     return [...left, ...equal, ...right];
};