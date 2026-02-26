/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    ///Number of Step to Reduce a Numbe r in Binary Representation to One :
    
  //let decimal = parseInt(s, 2);
   let steps = 0;
   let arr = s.split('');
   while(arr.length > 1){
   ///for(let i = 0; i <= decimal; i++){
     //if(decimal % 2 === 0){
    /// if the current  number is even, then you have to divide it by 2:

    if(arr[arr.length - 1] === '0')
 ///   decimal =  decimal / 2 ;
{
    arr.pop();
}else{
    let i = arr.length - 1;
   while(i >= 0 && arr[i] === '1'){
    arr[i] = '0';
    i--;
   }
   if(i >= 0){
    arr[i] = '1';
   }else{
    arr.unshift('1');
   }
}
steps++;
    ///if the current number is odd, you  have to add 1 to it :
   }
   return steps;




    ////ex: s = "1101" output is 6 : how to calculate  it : 


    ////essentially need to account how many step this is going to be our result: 

};