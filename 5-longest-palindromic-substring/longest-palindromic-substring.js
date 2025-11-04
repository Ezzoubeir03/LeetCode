/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //Palindromic Substring
    //for example : s= "babad"
    //OP:"bab": same forward and backward
    if(s < 2) return s;
    let start = 0;
    let maxLen = 1;
    function expand(left, right){
        while(left >= 0 && right < s.length  && s[left] === s[right]){
            if(right - left + 1 > maxLen){
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    }
    for(let i = 0 ; i < s.length;i++){
        expand(i - 1 , i + 1);
        expand(i, i + 1);
    }
    return s.substring(start, start + maxLen);

};