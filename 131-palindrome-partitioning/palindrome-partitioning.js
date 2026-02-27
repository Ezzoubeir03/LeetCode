/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
    
    ////Palindrome Partitioning 
    ////Our goal is to return all the possible palindrome partitioning of s:
    ////so for the first example we have s = "aab"; ,the output is [["a","a","b"], ["aa", "b"]]:
  
  let result = [];

  /// and also we have a special case that is about if we have only one character : so i am going to return it.


///  if(s.length === 1) return [[s]];


    function backtrack(start ,path){
        if(start === s.length){
        result.push([...path]);
        return;
        }
  for(let i = start; i < s.length; i++){
    if(isPalindrome(s, start, i)){
    path.push(s.slice(start, i + 1)); 
    backtrack(i + 1, path);
    path.pop();
              } 
          }
     } 

    function isPalindrome(str, left, right){
     while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
     }
     return true;
    } 
    backtrack(0, []);
    return result;
};