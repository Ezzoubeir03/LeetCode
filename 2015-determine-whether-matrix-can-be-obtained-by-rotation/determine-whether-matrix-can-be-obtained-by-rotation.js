/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
   //Determine Whether Matrix Can Be Otained By Rotation:

   //returning true if the mat equal to target by rotating mat in 90-degree increments 
   //otherwise return false.

let n = mat.length;

const rotate = (matrix) => {
    let newMatrix = Array.from({length: n}, () => Array(n).fill(0));

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            newMatrix[j][n - 1 - i] = matrix[i][j];


        }
    }
    return newMatrix;

};
   const isEqual = (a, b) => {
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(a[i][j] !== b[i][j])
                 return false;
        }
    }
    return true;
    };
    for(let k = 0; k < 4; k++){
        if(isEqual(mat, target))return true;
        mat = rotate(mat);
    }
   return false;
 

};