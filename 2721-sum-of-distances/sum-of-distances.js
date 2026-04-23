/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    ////Sum of Distances:

    ////we need to chech the array if we find the element that they are same and then we need to do the abs value of their diff
    // const n = nums.length;
    // const res = new Array(n).fill(0);
    
    // for(let i = 0; i < n; i++){
    //     let sum = 0;
    //  for(let j = 0; j < n; j++){
    //     if(nums[i] === nums[j]){
    //         sum += Math.abs(i - j);
    //     }
    //  }
    //  res[i] = sum;
    //     }
    // return res;


    const n = nums.length;
    const res = new Array(n).fill(0);

    const map = new Map();

    for(let i = 0; i < n; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], []);
        }
        map.get(nums[i]).push(i);
    }
    for(let p of map.values()){
        const m = p.length;

        const prefix = new Array(m).fill(0);
        prefix[0] = p[0];

        for(let i = 1; i < m; i++){
            prefix[i] = prefix[i - 1] + p[i];
        }

        for(let i = 0; i < m; i++){
            const pos = p[i];

            const left = pos * i -(i > 0 ? prefix[i -1] : 0);

            const right = (prefix[m -1]- prefix[i]) - pos * (m - i - 1);
            res[pos] = left + right;
        }
    }
    return res;
};