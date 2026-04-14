/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
////Rotate Array 
  ////we give k as a value that from mr it we need to change the hall array by rotating from the left to right by adding one :

  k = k % nums.length;
  reverse(nums, 0, nums.length -1);
  reverse(nums, 0, k -1);
  reverse(nums, k, nums.length -1);
};
function reverse(arr, left, right){
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}