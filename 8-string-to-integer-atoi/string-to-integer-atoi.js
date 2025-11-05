/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
   const min = -2147483648;
   const max = 2147483647;
   let i = 0;
   const n = s.length;
   while(i < n && s[i] === ' ')
    i++;
 if(i >= n)
 return 0;
 

 let sign = 1;
 if(s[i] === '+'){
    i++;
 } else if(s[i] === '-'){
    sign = -1;
    i++;
 }
 let result = 0;
 while(i < n && s[i] >= '0' && s[i] <= '9'){
    const digit = parseInt(s[i]);

    if(result > Math.floor((max - digit) / 10)){
        return sign === 1 ? max : min;
    }
    result = result * 10 + digit;
    i++;
 }
     return sign * result;
};