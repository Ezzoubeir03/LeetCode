/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    ///Factorial Trailing Zeroes:

    ////integer n,return the numbe of trailing zeroes in n!:
 
    ////example: n! = n * (n - 1) * (n - 2) * ........... 3 * 2 * 1. 
    let count = 0;

    while(n > 0){
     n = Math.floor(n / 5);

    count += n;
    }
    return count;
    
};