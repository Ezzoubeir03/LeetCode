/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    ///Separate the Digits in an Array:
  return nums.join('').split('').map(Number);

};