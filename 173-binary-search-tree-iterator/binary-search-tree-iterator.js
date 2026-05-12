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
 */

 ////Binary Search Tree Iterator
var BSTIterator = function(root) {
    this.stack = [];
    this.pushLeft(root);
};
BSTIterator.prototype.pushLeft = function(node){
    while(node) {
        this.stack.push(node);
        node = node.left;
    }
};
BSTIterator.prototype.next = function(){
    let node = this.stack.pop();

    if(node.right){
        this.pushLeft(node.right);
    }
     return node.val;
};
BSTIterator.prototype.hasNext = function(){
    return this.stack.length > 0;
};