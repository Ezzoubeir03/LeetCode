/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    ///Jump Game VII
    //s is a string and minJump, maxJump are integers 
    //s is a Binary number
   
        ///You Can move from the index i to j :
        //  i + minJump <= j <= min(i + maxJump, s.length - 1), and
        // s[j] == '0'.

        //if we reach the last index so i am gonna return true otherwise i shall return false:


        // if((i + minJump[i] <= j &&  j <= (i + maxJump[i], s.length -1)) && s[j] === 0){
        // return true;


          //}

    let n = s.length;
    let queue = [0];
    let farthest = 0;

    while(queue.length > 0){
        let i = queue.shift();

        let start = Math.max(i + minJump, farthest + 1);
        let end = Math.min(i + maxJump, n -1);

        for(let j = start; j <= end; j++){
            if(s[j] === '0'){
                if(j === n - 1){
                    return true;
                }
                queue.push(j);
            }
        }
        farthest = end;
    }
    return n === 1;
};