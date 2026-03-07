/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
    ///Minimum Number of Flips to Make the Binary String Alternating:
    ////fisrt thing that we need to do is to remove the first string s and then append it to the end of the string
    ///Pick any character in s and flip its value , if its value is '0' it becomes '1' and vice-versa:
    
   /// let num = parseInt(s, 10);
   let  n = s.length;
   let ss = s + s;
   let flip1 = 0;
   let flip2 = 0;

   let res = Infinity;
   let left = 0;

   for(let i = 0; i < ss.length; i++){
    let ex1 = i % 2 === 0 ? '0' : '1';
    let ex2 = i % 2 === 0 ? '1': '0';
    
    if(ss[i] !== ex1) 
    flip1++;
    if(ss[i] !== ex2)
    flip2++;

    if(i - left + 1 > n){
    let leftex1 = left % 2 === 0 ? '0' : '1';
    let leftex2 = left % 2 === 0 ? '1': '0';
    
    if(s[left] !== leftex1) 
    flip1--;
    if(s[left] !== leftex2)
    flip2--;
    left++;
    }
    if(i - left + 1 === n){
     res =  Math.min(res, flip1, flip2);
    }
   }
   return res;
   
};