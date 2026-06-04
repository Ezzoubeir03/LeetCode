/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    ///Total Waviness of Numbers in Range I
    function ezz(num){
     const s = num.toString(); 
     let count = 0;

    for(let i = 1; i < s.length -1; i++){
    let left = Number(s[i - 1]);
    let current = Number(s[i]);
    let right = Number(s[i + 1]);
    if(left < current && current > right){
        count++;
    }
    if(left > current && current < right){
        count++;
      }
    }
    return count;
    }
    let total = 0;
    for(let num = num1; num <= num2; num++){
        total += ezz(num);
}
    return total;
};