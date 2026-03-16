/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function(grid) {

    let row = grid.length;
    let column= grid[0].length;

    let sum = new Set();

    for(let r = 0; r < row; r++){
        for(let c = 0; c < column; c++){
          sum.add(grid[r][c]);

          for(let k = 1; k < row; k++){
            if(r + 2 * k >= row || c - k < 0 || c + k >= column) break;
            let s = 0;

            for(let i = 0; i < k; i++){
                s += grid[r + i][c + i];
            }

            for(let i = 0; i < k; i++){
                s += grid[r + k + i][c + k - i];
            }

            for(let i = 0; i < k; i++){
                s += grid[r + 2 * k - i][c - i];
            }
            for(let i = 0; i < k; i++){
                s += grid[r + k - i][c - k + i];
            }
            sum.add(s);
          }
        }
    }
    return [...sum].sort((a, b) => b - a).slice(0, 3);
};