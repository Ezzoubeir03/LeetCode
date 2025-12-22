/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    const rows = Array.from({length: 9}, () => new Set());
    const cols = Array.from({length: 9}, () => new Set());
   const boxes = Array.from({length: 9}, () => new Set());
 //let row = [];
// let column = [];
 //Valid Sudoku
     ///for each row shound not have duplicate number, and for the column too :
     ///submatrix shoudn't have a duplicate numbers to say is a Valid SudoKu bso i going to return true if it is  otherwise  i gonna return false : 
for(let i = 0 ; i < 9; i++){
    for(let j = 0; j < 9; j++){
        const num = board[i][j];
        if(num === ".") continue;
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if(rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)){
            return false;
        }
        rows[i].add(num);
        cols[j].add(num);
        boxes[boxIndex].add(num);
    }
}
   return true; 
};