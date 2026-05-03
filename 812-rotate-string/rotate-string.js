/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  ////Rotate String 
    if(s.length !== goal.length)
    return false;
    return(s + s).includes(goal);
};