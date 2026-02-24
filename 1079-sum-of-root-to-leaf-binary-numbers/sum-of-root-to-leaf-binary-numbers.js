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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    ///Sum of Root To Leaf Binary Numbers 

    ////if(!root) return null;

///I am going to use the DFS: 

////first path is : 100 -> 4. and then the second path : 101->5, and then the third path is : 110->6 , last path in this exampls is 111-> 7 than i am going the do the summition to get the output : 4 + 5 + 6 + 7 = 22.
  

  function Dfs(node, currentValue){
     if(!node) return 0;

      currentValue = currentValue * 2 + node.val; 

    if(node.left === null && node.right === null){
      return currentValue;
    }
    return  Dfs(node.left, currentValue) + Dfs(node.right, currentValue);
  }
  return Dfs(root, 0);

};