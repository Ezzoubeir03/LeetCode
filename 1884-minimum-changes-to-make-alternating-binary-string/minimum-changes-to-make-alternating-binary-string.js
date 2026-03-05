/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    ///Minimum Changes To Make Alternating Binary String :

    ///if it is already alternating we need to return 0 otherwise return 1;
  let count1 = 0;
  let count2 = 0;

  for(let i = 0; i < s.length; i++){
    if(s[i] !== (i % 2 === 0 ? '0' : '1')){count1++}
    if(s[i] !== (i % 2 === 0 ? '1' : '0')){count2++}
  }
  return Math.min(count1, count2);
};