/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    const map = new Map();
    let ans = Infinity;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!map.has(num)) map.set(num, []);

        const arr = map.get(num);
        arr.push(i);

        if (arr.length > 3) arr.shift();

        if (arr.length === 3) {
            const dist = 2 * (arr[2] - arr[0]); 
            ans = Math.min(ans, dist);
        }
    }

    return ans === Infinity ? -1 : ans;
};