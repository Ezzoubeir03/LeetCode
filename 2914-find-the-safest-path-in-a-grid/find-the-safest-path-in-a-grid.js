/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    ///Find the Safest Path in a Grid:

    ///the starting index always shall be grid[0][0], and the end one is grid[n][m] 

   const n = grid.length;
   const directions = [
    [1,0],
    [-1, 0],
    [0, 1],
    [0, -1]
   ];


const dist = Array.from({
       length: n
}, () => Array(n).fill(-1));

const queue = [];


for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(grid[i][j] === 1){
            dist[i][j] = 0;
            queue.push([i, j]);
        }
    }
}
 let index = 0;

 while(index < queue.length){
    const [r, c] = queue[index++];

    for(const [dr, dc] of directions){
        const nr = r + dr;
        const nc = c + dc;

        if (
            nr >= 0 && 
            nr < n &&
            nc >= 0 &&
            nc < n &&
            dist[nr][nc] === -1
        ){
            dist[nr][nc] = dist[r][c] + 1;
            queue.push([nr, nc]);
        }
    }
 }
function canReach(safe){
    if(dist[0][0] < safe){
        return false;
    }
    const visited = Array.from(
        {length: n}, 
        () =>Array(n).fill(false)
    );
    const q = [[0, 0]];
    visited[0][0] = true;
    let pointer = 0;

 while(pointer < q.length){
    const [r, c] = q[pointer++];

    if(r === n - 1 && c === n -1){
        return true;
    }
    for(const [dr, dc] of directions){
        const nr = r + dr;
        const nc = c + dc;

        if ( 
            nr >= 0 &&
            nr < n &&
            nc >= 0 &&
            nc < n &&
            !visited[nr][nc] &&
            dist[nr][nc] >= safe
        ){
            visited[nr][nc] = true;
            q.push([nr, nc]);
        }
    }
 }
     return false;
}

let left = 0;
let right = 2 * n;

let answer = 0;
while(left <= right){
    const mid = Math.floor((left + right) / 2);
    

    if(canReach(mid)){
        answer = mid;
        left = mid + 1;
    } else {
        right = mid -1;
    }
}
return answer;
};