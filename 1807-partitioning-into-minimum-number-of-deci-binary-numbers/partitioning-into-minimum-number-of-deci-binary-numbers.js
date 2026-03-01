/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    ///Partitioning Into Minimum Number Of Deci-Binary Numbers:
    ///i am going to check  the larger digit in my number, so then i will return it :
     let dec = n.split('');
     let max = Math.max(...dec);
    
    return max;

};