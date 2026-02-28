/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    /////Surrounded Regions:
    if(!board || board.length === 0) return;
    let row = board.length;
    let col = board[0].length;

    function dfs(r, c){
         if(r < 0 || c < 0 || r >= row || c >= col || board[r][c] !== 'O'){
          return;
          }
          board[r][c] = 'S';

          dfs(r+1,c);
          dfs(r-1,c);
          dfs(r,c+1);
          dfs(r,c-1);
    }

          for(let i = 0; i < row; i++){
            if(board[i][0] === 'O') dfs(i, 0);
            if(board[i][col-1] === 'O') dfs(i, col -1);
          }
          for(let j = 0; j < col; j++){
            if(board[0][j] === 'O') dfs(0, j);
            if(board[row -1][j] === 'O') dfs(row -1, j);
          }

      for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(board[i][j] === 'O'){
               board[i][j] = 'X';
        }
     else if(board[i][j] === 'S'){
            board[i][j] = 'O';
        }
      }
    }    
};