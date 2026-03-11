/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    
//////Complement of Base 10 Integer :


///////so our target is to return n complement: 

let Binary = n. toString(2);

///let Decimal = parseInt(Binary, 2);


let flip = Binary.split("").map(bit => bit === "0" ? "1" : "0").join("");

return parseInt(flip, 2);
};