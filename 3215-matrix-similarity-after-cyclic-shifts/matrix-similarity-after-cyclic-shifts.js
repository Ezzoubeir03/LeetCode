/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    ///Matrix Similarity After Cyclic Shifts:

   let m = mat.length;
   let n = mat[0].length;

    k = k % n;

   for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
        let expectedValue;


        if(i % 2 === 0){
            expectedValue = mat[i][(j + k) % n];
        } else {
         expectedValue = mat[i][(j - k + n) % n];
        }

            if(mat[i][j] !== expectedValue){
                return false;
            }
        }
    }
    return true;


};