/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    ///Compare version Numbers 

    ///comparation version1 and version2 

   ///if version1 < version2 return -1, else if version1 > version2 return 1, otherwise return 0;

   let d1 = version1.split('.');
   let  d2 = version2.split('.');

   for(let i = 0; i < Math.max(d1.length, d2.length); i++){
    
   const a1 = Number(d1[i] || 0);

   const a2 = Number(d2[i] || 0);

   if(a1 !== a2) return a1 > a2 ? 1 : -1;

   }
   return 0;
   

};