/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    //Mirror Distance of an Integer :

    const rev = n.toString().split('').reverse(n).join('');
    return Math.abs(n - rev);
};