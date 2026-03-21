/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    //Flip Square Submatrix Vertically:

   //let m = grind.length;
   //let n = grind[i].length;

////The integers x and y represent the row 
////the integer k represents the size(side length)



 for(let i = 0; i < Math.floor(k/2); i++){
    for(let j = 0; j < k; j++){
      let temp = grid[x+i][y+j];
////our goal to flip the submatrix by reversing the order of its rows vertically
       grid[x + i][y + j] = grid[x + k - i - 1][y + j];

       grid[x + k - i - 1][y + j] = temp;

///Return the updated matrix:

       }
   }
 return grid;

      
};