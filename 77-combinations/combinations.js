/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    //Combinations
    //[(k - 1), k] this is the last output:
    ///and additionally n starting from 1:
   const result = [];
   const path = [];
  function backtrack(start){
    if(path.length === k){
        result.push([...path]);
        return;
    }
    for(let i = start ; i <= n;i++){
        path.push(i);
        backtrack(i + 1);
        path.pop();
    }
  }
  backtrack(1);
  return result; 
};