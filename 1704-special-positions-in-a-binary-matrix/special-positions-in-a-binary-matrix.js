/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    ///Spcial Position in a Binary Matrix:
    ///so our goal to return the number of special positions in mat:
    /////it called special if mat[i][j] == 1 and the all other row and column equal to zero:
    let count = 0;
    //let rowCount = [];
    ///let colCount = [];
    let m = mat.length;
    let n = mat[0].length;
    let rowCount = new Array(m).fill(0);
    let colCount = new Array(n).fill(0);
  
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){

     if(mat[i][j] === 1){
        rowCount[i]++;
        colCount[j]++;
               }
             }
          }
          for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
            if(mat[i][j] === 1 && rowCount[i] === 1 && colCount[j] === 1){
             count++;
                }
         }
    }
    return count;
};