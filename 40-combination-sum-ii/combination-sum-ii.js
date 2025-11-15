/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    /// Combination Sum , so we have a target as one num and we need to account how many times 
    /// in our array to achieve the target and another thing is not in order:
    // sorting 
    let result = [];
     candidates.sort((a, b) => a -b);
      function backtrack(start, current, end){
        if(current === 0){
         result.push([...end]);
         return;
        }
     
     for(let i = start; i < candidates.length ; i++){
      if(i > start && candidates[i] === candidates[i -1])continue;
      if(candidates[i] > current) break;
      end.push(candidates[i]);
      backtrack(i + 1, current - candidates[i], end );
      end.pop();
     }  
 }
 backtrack(0,target,[]);  
 return result;
};