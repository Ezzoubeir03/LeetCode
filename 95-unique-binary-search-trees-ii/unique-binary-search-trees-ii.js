/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    //Unique Binary Search Trees II
    if(n === 0 ) return [];
    const memo = new Map();
    function Ezzoubeir(start, end){
        const key = `${start}_${end}`;
    if(memo.has(key)) return memo.get(key);

    const res = [];
    if(start > end){
        res.push(null);
        memo.set(key, res);
        return res;
    }
    for(let rootVal = start; rootVal <=end; rootVal++){
        const leftTrees = Ezzoubeir(start, rootVal - 1);
        const rightTrees= Ezzoubeir(rootVal + 1, end);

        for(const L of leftTrees){
            for(const R of rightTrees){
                const root = new TreeNode(rootVal);
                root.left = L;
                root.right = R;
                res.push(root);
            }
        }
    }
    memo.set(key, res);
    return res;
    }
    return Ezzoubeir(1,n);
};