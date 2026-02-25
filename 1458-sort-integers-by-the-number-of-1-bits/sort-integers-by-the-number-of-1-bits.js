/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    ///Sort Integers by The Number of 1 Bits :
   arr.sort((a, b)=>{
   const count = n => n.toString(2).split('').filter(bit => bit ==='1').length;

    const dif = count(a) - count(b);
    if(dif === 0) return a -b;
    return dif;
   });
   return arr;
};