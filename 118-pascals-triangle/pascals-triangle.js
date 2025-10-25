/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    triangle = [];
    for(let i = 0; i < numRows; i++){
    triangle[i] = [1];
    
    for(let j = 1; j < i; j++){
    triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
    }
    if(i > 0) triangle[i].push(1);
}
return triangle;
};