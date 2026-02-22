/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    ///Populating Next Right Pointers in Each Node II:

    if(!root) return null; 
 ///I think i am going to use BFS :
 let queue = [root];
while(queue.length > 0){
    let Breath = queue.length;
    for(let i = 0; i < Breath;i++){
        let node = queue.shift();
        if(i < Breath - 1){
            node.next = queue[0];
        }
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
}
return root;
};