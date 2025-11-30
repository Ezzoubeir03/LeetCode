/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    ///Unique Binary Search Trees:
    const dynamicProgramming = new Array(n + 1).fill(0);

    dynamicProgramming[0] = 1;
    dynamicProgramming[1] = 1;
    for(let i = 2; i <= n ; i++){
    for(let j = 1; j <=i ; j++){
     dynamicProgramming[i] += dynamicProgramming[j - 1] * dynamicProgramming[i -j];
       }
    }
    return dynamicProgramming[n];
};