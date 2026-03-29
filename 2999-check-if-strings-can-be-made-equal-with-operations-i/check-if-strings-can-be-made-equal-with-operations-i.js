/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    ///Check if Strings Can be Made Equal With Operations I:
    

    ////s1, s2, both length 4, lowercase English letters.

       
         /////we need to look for the letters that can be change  make our s1 and s2 equals .

         return (

         [s1[0], s1[2]].sort().join('') === [s2[0], s2[2]].sort().join('') &&
         [s1[1], s1[3]].sort().join('') === [s2[1], s2[3]].sort().join('')
          
          );

};