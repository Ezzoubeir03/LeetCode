/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    //Count and Say :
  let s = "1";
  for(let i = 1; i < n; i++){
    let next = "";
    let count = 1;
    for(let j = 1; j <= s.length; j++){
     if(s[j] === s[j - 1]){
        count++;
     } else {
        next += count + s[j - 1];
        count = 1;
     }
    }
    s = next;
  
  }
  return s;
};