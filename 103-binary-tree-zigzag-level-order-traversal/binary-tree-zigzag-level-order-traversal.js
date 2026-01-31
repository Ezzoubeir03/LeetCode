/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    //Binary Tree Zigzag Level Order Traversal: 

     if(!root) return [];
     
    /// if (root.length === 1) return [[root[0]]];
    let queue = [root];
    const result = []; 
    let depth = 0;
    while(queue.length){
        const level = [];
        let levelSize = queue.length;
        while(levelSize){
            const current = queue.shift();
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
            if(depth % 2=== 0){
                level.push(current.val);
            }else {
                level.unshift(current.val);
            }
            levelSize--;
        }
        result.push(level);
        depth++;
    }
    return result;
};