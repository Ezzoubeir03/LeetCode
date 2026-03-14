/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    ///Reverse Words in a String :
    

    /////we need to reverse word by word:

return s.trim().split(/\s+/).reverse().join(' ');
    
};