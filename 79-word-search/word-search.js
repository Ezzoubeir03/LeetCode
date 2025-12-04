/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    //Word Search :
    ///return true if the word exista in the grid:
    //input : 
    const rows = board.length;
    const cols = board[0].length;
    function dfs(r, c, index){
        if(index === word.length) return true;
        if(r < 0 || c < 0 || r >= rows || c >= cols) return false;
        if(board[r][c] !== word[index]) return false;
        let temp = board[r][c];
        board[r][c] = '#';

        let found = 
       dfs(r + 1, c, index + 1) ||
       dfs(r - 1, c, index + 1) ||
       dfs(r , c + 1, index + 1) ||
       dfs(r, c - 1, index + 1);
   
      board[r][c] = temp;

      return found;
      }

    for(let r = 0 ; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(dfs(r, c, 0)) return true;
        
      }
    }
    return false;
}