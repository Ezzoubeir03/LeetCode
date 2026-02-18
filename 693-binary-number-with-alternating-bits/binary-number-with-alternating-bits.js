/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    ////Binary Number with Alternating Bits:
    ////n.toString(2);///converting from decimal to binary :
    let result = n.toString(2);

    for(let i = 1; i <= result.length; i++){
        if(result[i] === result[i-1]){
            return false;
        }
    }
           return true;
};