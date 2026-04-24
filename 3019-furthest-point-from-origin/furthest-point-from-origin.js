/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    ////Furthest Point From Origin 
    let left = 0, right = 0, blanck = 0;
    let count = 0;
    
   for(let move of moves){
    if(move === 'L') left++;
    else if(move === 'R') right++;
    else blanck++;
   }
   return Math.abs(left - right) + blanck;
};