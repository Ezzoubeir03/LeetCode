/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    //permutations II
    //For the first array we have three elements (1,1,2) so the output will be 3 * 3:which is all the possibility that 
    //can be for changing the array:
    //what i am going to change is for each element in the array i will change it as the size of the array:
    //so first : 

    nums.sort((a, b) => a -b);
    const result = [];
    const used = new Array(nums.length).fill(false);

    function backtrack(path){
        if(path.length === nums.length){
            result.push([...path]);
            return;
        }
        for(let i = 0; i < nums.length;i++){
            if(used[i]) continue;
            if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue; 
            used[i] = true;
            path.push(nums[i]);
            backtrack(path);

            path.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return result;
};