/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    //Subsets:
    ////[1,2,3]: 
    //this the output for this example: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] 
    const res = [];

    function backtrack(start, path){
        res.push([...path]);

        for(let i = start; i < nums.length; i++){
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    backtrack(0, []);
    return res;
};