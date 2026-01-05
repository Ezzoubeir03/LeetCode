/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    ////our problem is about to Set Matrix Zerores like what we need find the zeros in the matrix and then look at its row and column , and try to set all the othert digit in that row and column replace it with zeros
    let m = matrix.length;
    let n = matrix[0].length;

    let firstRow = false;
    let firstColumn = false;

  for(let j = 0; j < n ; j++){
    if(matrix[0][j] === 0){
     firstRow = true;
     break;
    }

  }
  for(let i = 0; i < m; i++){
     if(matrix[i][0] === 0){
        firstColumn = true;
        break;
     }
  }
  for(let i = 1; i < m; i++){
 for(let j = 1; j < n; j++){
 if(matrix[i][j] === 0){
    matrix[i][0] = 0;
    matrix[0][j] = 0;
        }
     } 
  }
  for(let i = 1; i < m; i++){
   if(matrix[i][0] === 0){
    for(let j = 1; j < n; j++){
        matrix[i][j] = 0;
    }
   }
  }

  for(let j = 1; j < n; j++){
    if(matrix[0][j] === 0){
        for(let i = 1; i < m ; i++){
            matrix[i][j] = 0;
        }
    }
  }
  if(firstRow){
    for(let j = 0; j < n; j++){
        matrix[0][j] = 0;
    }
  }
  if(firstColumn){
    for(let i = 0; i < m; i++){
        matrix[i][0] = 0;
    }
  }
    
};