/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    ///Rotated Digits:
    let count = 0;

  for(let i = 1; i <= n; i++){
    let s = i.toString();
    let valid = true;
    let diff = false;

    for(let ch of s){
        if(ch === '3' || ch === '4'|| ch === '7'){
            valid = false;
            break;
        }
        if(ch === '2' || ch === '5' || ch === '6' || ch === '9'){
          diff = true;
        }

    }
    if(valid && diff){
        count++;
    }
  }
  return count;

};