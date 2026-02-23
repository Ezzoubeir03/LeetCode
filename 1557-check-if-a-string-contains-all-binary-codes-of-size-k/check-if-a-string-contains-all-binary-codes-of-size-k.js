/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
   //Check If a String Contains All Binary Codes of Size K :
    
     ////first we need to see K the we need to see the s:
      

      ///right now i did a step that can calculate for me how many case we have : 
      
      ///k = s.split('');
      
      let total = Math.pow(2, k);
      
      ///creating this set for ignoring the duplicate:
      let set = new Set();

    /////second step : we need to test the case :
    for(let i = 0; i <= s.length - k ; i++){
        let sub = s.substring(i, i+k); 
        set.add(sub);


     if(set.size === total){
        return true;
         }
    }
   
   return false;
   ////i am going to return true if every binary code of length k is a substring of S .Otherwise 
   ////return false:

};