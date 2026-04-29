/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    ///count Primes 
    ///we need to return  the prime numbers that are strictly less then n :

    // let count = 0;
      if(n < 2) return 0;
      const isPrime = new Array(n).fill(true);
      isPrime[0] = isPrime[1] = false;
     
     for(let i = 2; i * i < n; i++){
        if(isPrime[i]){
            for(let j = i * i; j < n; j += i){
                isPrime[j] = false
            }
        }
     }
     let count = 0;
    for(let i = 2; i < n; i++){
        if(isPrime[i]) count++;
    }
    return count;
};