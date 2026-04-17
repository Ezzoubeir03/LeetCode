/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
  ///Minimum Absolute Distance Between Mirror Pairs:
 

 let map = new Map();
 let answer = Infinity;

 function  reverseNum(x){
    let rev = 0;
    while(x >  0){
        rev = rev * 10 +(x % 10);
        x = Math.floor(x /10);
    }
    return rev;
 }
 for(let i = 0; i < nums.length; i++){
    if(map.has(nums[i])){
      answer = Math.min(answer, i - map.get(nums[i]));
    }
    let reversed = reverseNum(nums[i]);
      map.set(reversed, i);
 }
 return answer === Infinity ? -1 : answer;
};