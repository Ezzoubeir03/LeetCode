/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    //Permutation 
    ///our target to return the all possible , another things is you need to return the answer in any order :
    //e.g,[0,1] === [[0,1],[1,0]]:
    // if(nums === ) 
    // let array = [];
    // let left = 
    // let right = nums.length - 1;
    // for(let i = 0; i <= nums.length - 2; i++){
    //     while(nums[i+1] > nums[i]){
    //         left++;
    //     }
    // }
    let result = [];
    let path = [];
    let used = new Array(nums.length).fill(false);

    function backtrack(){
      if(path.length === nums.length){
        result.push([...path]);
      }
      for (let i = 0; i < nums.length; i++){
        if(used[i]) continue;

        used[i] = true;
        path.push(nums[i]);

        backtrack();
        used[i] = false;
        path.pop();
      }
    }
    backtrack();
    return result;
};