/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    //Check if Array Is Sorted and Rotated
    let m = 0;
    let n = nums.length - 1;
    let rotate = 0; 
   for(let i = 0; i < nums.length - 1; i++){
    if(nums[i] > nums[i + 1]){
        rotate = rotate + 1;
        
    }
   }
   if(nums[n] > nums[m]){
            rotate = rotate + 1;
        } 
        return rotate <= 1;
};