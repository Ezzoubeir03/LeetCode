/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //what i am gonna say now is for the subsequence should be in order(character) and not necessarily to be next to each other
    //first let me make a list that own all the character(1-26) :
    // const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // let i = 0;
    // let j = 0;
    // while(i < s.length && j < alphabet.length){
    //     if(s[i] === alphabet[j]){
    //         i++;
    //     }
    //     j++;
    // }
    // return i === s.length;
  let set = new Set();
  let left = 0,maxLength = 0;
  for(let right = 0; right < s.length; right++){
    while(set.has(s[right])){
        set.delete(s[left]);
        left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;

};
