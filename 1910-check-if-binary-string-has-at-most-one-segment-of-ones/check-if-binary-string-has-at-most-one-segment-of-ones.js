/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
////Check if Binary String Has at Most One Segment Ones:
////returning true if s contains at most one contiguous segment of ones, otherwise return false:
for(let i = 0; i <=s.length - 1; i++){
    if(s[i] ==='0' && s[i+ 1] === '1'){
        return false;
       }
   }
 return true;
};