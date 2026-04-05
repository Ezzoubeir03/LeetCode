/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    ///our target is to movie and then at the end we need to be in the original position, if it is return true , otherwise return false;
let x = 0;
let y = 0;

for(let move of moves){
    if(move === 'R') x++;
   else if(move === 'L') x--;
   else if(move === 'U') y++;
    else if(move === 'D') y--;
}
return x === 0 && y === 0;
};