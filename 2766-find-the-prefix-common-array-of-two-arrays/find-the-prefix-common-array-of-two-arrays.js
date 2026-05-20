/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    //Find the Prefix Common Array of Two Arrays
   const n = A.length;
   const seen = new Array(n + 1).fill(false);
   const result = [];
   let common = 0;

   for(let i = 0; i < n; i++){
    if(seen[A[i]]){
        common++;
    }else{
        seen[A[i]] = true;
    }

    if(seen[B[i]]){
        common++;
    }else{
        seen[B[i]] = true;
    }
     result.push(common);
   }
   return result;
};