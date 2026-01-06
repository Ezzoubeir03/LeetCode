/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    ///Unique Paths 
    ///The robot can only movie either down or right at any point in time:
    //return the number of possible unique paths that the robot can take to reach the bottom-right corner

let r = Math.min(m -1, n- 1);
let total = m + n- 2;
let res = 1;
for(let i = 1; i <= r ;i++){
    res = res * (total - r + i) / i;
}
return Math.round(res);
};