/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    ////Create Binary Tree From Description:
////root, left, right 
  let nodes = new Map();
  let children = new Set();

  for(let [parent, child, isLeft] of descriptions){
    if(!nodes.has(parent)){
        nodes.set(parent, new TreeNode(parent));
    }
    if(!nodes.has(child)){
        nodes.set(child, new TreeNode(child));
    }
    let parentNode = nodes.get(parent);
    let childNode = nodes.get(child);

    if(isLeft === 1){
        parentNode.left = childNode;

    }else{
        parentNode.right = childNode;
    }
    children.add(child);
  }

  for(let [parent] of descriptions){
    if(!children.has(parent)){
        return nodes.get(parent);
    }
  }

};