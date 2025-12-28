/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
 //we have the sufficient and cofficient
//  let a = Math.pow(x, n);
//    if(x === 1.00000) return 1.00000;
//    if(x === 0.00000) return 0.00000;
//    if(n === 1) return x;
//    while((x >= 2.00000 && n >= 2) || (x >= -2.00000 && n < 0)){
//     return a;
//    }
if(n === 0) return 1;
if(n  < 0){
    x = 1 / x;
    n = -n;
} 
let result = 1;
while( n > 0){
    if(n % 2 === 1) result *= x;
    x *= x;
    n = Math.floor(n / 2); 
}
return result;
};