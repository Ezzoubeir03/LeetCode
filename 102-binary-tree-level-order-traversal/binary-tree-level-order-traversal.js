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
var levelOrder = function(root) {
    //Binary Tree Level Order Traversal:
    if(root === null) return [];
    let res = [];
    let queue = [root];
    while (queue.length){
        let level = [];
        let levelSize = queue.length;
         while(levelSize){
            let current = queue.shift();

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
            level.push(current.val);
            levelSize--;
         }
      res.push(level);
    }
 return res;
};