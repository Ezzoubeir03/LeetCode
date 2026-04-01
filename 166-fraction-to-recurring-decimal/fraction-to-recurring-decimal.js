/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    ////Fraction to Recurring Decimal:
if(numerator === 0) return "0";


let result = "";

if(numerator * denominator < 0)  result += '-';

let num = Math.abs(numerator);
let den = Math.abs(denominator);

result += Math.floor(num / den);
let remander = num % den;

if(remander === 0)
    return result;

result += '.';

let map = new Map();

while(remander !== 0){
    if(map.has(remander)){
        let i = map.get(remander);
        return result.slice(0, i) + "(" + result.slice(i) + ")";
    }
    map.set(remander, result.length);

    remander *= 10;
    result += Math.floor(remander / den);
    remander %=  den;

}
  return result;
};