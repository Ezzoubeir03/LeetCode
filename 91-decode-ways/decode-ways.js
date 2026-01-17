/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
   //Decode Ways
   ///Letters from A to Z, our input is a number and we need to count how many letters we can find from that number:
   ///the number should be smaller or equal to 26:

 /// if(s.index(0) === 0) return 0;
//    let resul = 0;
//    for(let i = 0; i <= s; i++) {

//    }
if(s[0] === '0') return 0;
let n = s.length;
const dp = new Array(n + 1).fill(0);
dp[0] = 1;
dp[1] = 1;
for(let i = 2; i <= n ; i++){
    if(s[i - 1] !== '0'){
        dp[i] += dp[i -1];
    }
    const twoDigit = parseInt(s.slice(i - 2, i));
    if(twoDigit >= 10 && twoDigit <= 26){
        dp[i] += dp[i - 2];
    } 
}
return dp[n];
};