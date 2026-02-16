/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    ////so what we need to do in this problem is to reverse from the decimal to binary 
    //and then do the reverse and agai  change it to decimal and this will be our result.
 
 return parseInt( n.toString(2).padStart(32,'0').split('').reverse().join(''),2) >>> 0;
    
};