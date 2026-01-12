/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
   //Search a 2D Matrix 
   //Each row is sorted in non-decreasing order.
   //The first integer of each row is greater then the last of the previous row .
   ////if the target is in matrix will return true otherwise return false 
   ///let result = [];
   for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
     if(matrix[i][j] === target){
        return true;
     }    
    }
}
return false;
};
