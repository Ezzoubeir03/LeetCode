/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
 ////if there is no adjacent  i am going to return 0;
///we need to count the distence beween the one's:
///let bin = n.toString(2);
//  let Binary =  n.toString(2).split('').filter(bit => bit === '1').length;
//  for(let i = 0; i <= n; i++){
//     if(Binary > )


 //}
let lastIndex = -1;
let maxGap = 0;
let index = 0;

while(n > 0){
    if((n & 1) === 1){
        if(lastIndex !== -1){
            maxGap = Math.max(maxGap, index - lastIndex);
        }
        lastIndex = index;
    }
    n = n >> 1;
    index++;
}
return maxGap;

};