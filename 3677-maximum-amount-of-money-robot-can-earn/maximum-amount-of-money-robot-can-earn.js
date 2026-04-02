/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function(grid) {
    /////Maximum Amount of Money Robot Can Earn:

    ///given m * n grid, the robot start from the top left corner of the grid(0,0)
    ////our goal to reach the bottom-right corner(m -1, n -1)
    /////futhermore the robot can move either right or down at any point in time:
    let m = grid.length;
    let n = grid[0].length;

   let dp = Array.from({ length : m }, () => Array.from({ length: n }, () => Array(3).fill(-Infinity))
   );
   dp[0][0][0] = grid[0][0];
   if(grid[0][0] < 0) dp[0][0][1] = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0 ; j < n; j++){
            for(let k = 0; k <= 2; k++){
         if(dp[i][j][k] === -Infinity) continue;

for(let [dx, dy] of [[1, 0], [0, 1]]){
    let ni = i + dx;
    let nj = j + dy;
    if(ni >= m || nj >= n) continue;

    let val = grid[ni][nj];
    
    dp[ni][nj][k] = Math.max(
        dp[ni][nj][k], dp[i][j][k] + val
    );

    if(val < 0 && k < 2){
        dp[ni][nj][k + 1] = Math.max(dp[ni][nj][k+1], dp[i][j][k]);

                }
           }
        }
    }
}

return Math.max(...dp[m -1][n -1]);
};