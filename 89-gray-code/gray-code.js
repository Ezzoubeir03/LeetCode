/**
 * @param {number}
 * @return {number[]}
 */
var grayCode = function(n) {
    ///Gray Code :
    let result = [];
   for(let i = 0; i < (1 << n); i++){
     let gray =  i ^ (i >> 1);
     result.push(gray);
   }
   return result;
    
};