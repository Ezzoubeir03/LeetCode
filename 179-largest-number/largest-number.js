/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    ////Largest Number 

    ///we have a list that have the non negative integers nums 

    ////we essentially need to return a string because of the huge number.

   let arr = nums.map(String);

   arr.sort((a, b)=>{
    let order1 = a +b;
    let order2 = b + a;
    return order2.localeCompare(order1);
   });
  let result = arr.join("");

  if(result[0] === '0') return '0';
    
    return result;

};