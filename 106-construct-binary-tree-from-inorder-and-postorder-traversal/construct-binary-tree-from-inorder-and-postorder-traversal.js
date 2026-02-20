/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    ///Construct Binary Tree from Inoorder and Postorder Traversal:

    if(!inorder.length || !postorder.length )return null;

////i am going to use map for creating empty :
    const map =new Map();
 
 inorder.forEach((val, index) =>{
    map.set(val, index);
 });
 function helper(left, right){
    if(left > right)
        return null;

   const rootVal = postorder.pop();
   const root = new TreeNode(rootVal);

   const index = map.get(rootVal);

   root.right = helper(index+1, right);
   root.left = helper(left, index - 1);

   return root;
 }

return helper(0, inorder.length -1);

};