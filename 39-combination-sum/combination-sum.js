/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    //Combination Sum :
    ///our Goal to find the all possibility that can achieve the target : using the sum 
  let result = [];
  function backtracking(start, current, total){
    if(total === target){
        result.push([...current]);
        return;
    }
    if(total > target)return;
     for(let i = start; i < candidates.length; i++){
      current.push(candidates[i]);
      backtracking(i, current, candidates[i] + total);
      current.pop();
      }
  }
  backtracking(0,[],0);
  return result;
};