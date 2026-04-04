/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    //Number of 1 Bits:


   ///positive integer n : write a  function that returns the number of set bits in its binary representation:
   
   return n.toString(2).split('1').length -1;

};