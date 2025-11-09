/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length < 3)return 0;
    //let sum = 0;
    nums.sort((a,b)=>a -b);
    let closest = Infinity;
     
     for(let i = 0; i < nums.length - 2;i++){
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
        let sum = nums[left] +  nums[i] + nums[right];
        if(Math.abs(sum - target) < Math.abs(closest - target)){
            closest = sum;
        }else if(sum < target){
            left++;
        }else if(sum > target){
            right--;
        }else{
            return sum;
           }
       
        }
    }
    return closest;
};