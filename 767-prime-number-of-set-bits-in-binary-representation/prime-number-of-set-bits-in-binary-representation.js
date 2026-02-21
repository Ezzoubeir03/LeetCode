/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 
 function countSetBits(n){
    return n.toString(2).split('').filter(bit => bit === '1').length;
}

 function isPrime(n){
  if(n < 2) return false;
  for(let i = 2; i <= Math.sqrt(n);i++){
    if(n % i === 0) return false;
  }
  return true;
 }



var countPrimeSetBits = function(left, right) {
    ////Prime Number of Set Bits in Binary Representation :
    ////the concept is having the left and right value(right > lift) and we need to know all the numbers from the 
    ///left t right binary number , and than we need to count how many 1's we have , if it is prime we will increase the 
    //value.
    ///while(left < right){
       let count = 0;
       for(let i = left; i <= right; i++){
       let ones = countSetBits(i);
       //}
       if(isPrime(ones))
       count++;
    }
  return count;
};