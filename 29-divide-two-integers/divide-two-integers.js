/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    //divide Two Integers
    let Q = (dividend / divisor)
       let Max = 2147483647;
       let Min = -2147483648;
       if(Q > 2147483647) return Max;
       if(Q < -2147483648) return Min;
       
       //for(let i= 0; i < Q; i++ ){
        ///how about if we have the divisor greater than dividend??
        if(dividend === Min && divisor === -1){
            return Max;
        }else if(divisor ===dividend){
            return 1;
        }else if(dividend > divisor){
         return Math.trunc(Q);
        }
        return Q < 0 ? Math.ceil(Q) : Math.floor(Q); 
       };