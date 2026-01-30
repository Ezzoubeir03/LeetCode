/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    //Interleaving String 
    //return true if S3 is formed by interleaving s1 and s2 :
    if(s1.length + s2.length !== s3.length) return false;

    const m = s1.length;
    const n = s2.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    dp[0][0] = true;
   for(let i = 0; i <= m; i++){
    for(let j = 0; j <= n; j++){

if(i > 0 && s1[i -1] === s3[i + j - 1]){
     dp[i][j] = dp[i][j] || dp[i -1][j];
}
   if(j > 0 && s2[j -1] === s3[i + j -1]){
    dp[i][j] = dp[i][j] || dp[i][j -1];
       }
     }
   }
    return dp[m][n];
};