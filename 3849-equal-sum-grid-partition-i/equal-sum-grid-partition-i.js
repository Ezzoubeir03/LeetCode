/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    ///Equal Sum Grid Partition I 

    ///m * n matrix grid of positive integers 

    ///ok so what i need to see is i need to check if the first row it sum is same with the next one :

    ///if it is return true otherwise return false:


    let  m = grid.length;
    let n = grid[0].length;
    let total = 0;
   
    for(let row = 0; row < m; row++){
        for(let col = 0; col < n; col++){
            
       total += grid[row][col];
        }
    }
    if(total % 2 !== 0) return false; 

    const target = total / 2;

    let currentSum = 0;
    for(let i = 0; i < m -1; i++){
       for(let j = 0; j < n; j++){
        currentSum += grid[i][j];
       }

       if(currentSum === target) return true;

    }
    currentSum = 0;
    for(let i = 0; i < n -1; i++){
        for(let j = 0; j < m; j++){
            currentSum += grid[j][i];
        }
        if(currentSum === target) return true;
    }
    return false;
};