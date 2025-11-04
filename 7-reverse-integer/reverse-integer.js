/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     const MIN = -2147483648;
    const MAX = 2147483647;
    let sign = 1;
    if(x < 0){
        sign = -1;
        x= -x;
    }
    let reversed = 0;
    while(x > 0){
        const lastDigit = x % 10;
        x = Math.floor(x / 10);
        reversed = reversed * 10 + lastDigit;
    }
    reversed = reversed * sign;
    if(reversed < MIN || reversed > MAX){
     return 0;
    }
    return reversed;
};