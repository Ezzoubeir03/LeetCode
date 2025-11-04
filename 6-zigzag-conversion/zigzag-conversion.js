/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    let result = [];
    let n = s.length;
    const period = 2 * (numRows - 1);
    for(let i = 0 ; i < numRows; i++){
        for(let j = i ; j < n ; j += period){
        result.push(s[j]);
            
    const diagonalPos = j + period - 2 * i;
    if(i !== 0 && i !== numRows - 1 && diagonalPos < n ){
        result.push(s[diagonalPos]);
       }
    }
 }
    return result.join('');
};