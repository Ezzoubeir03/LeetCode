/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    //Convert Sorted List to Binary Search Tree:
    if(!head) return null;
   const findMiddle = (head) => {
    let slow = head;
    let fast = head;
    let prev = null;
    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if(prev) prev.next = null;
    return slow;
   };
   let mid = findMiddle(head);
   let root = new TreeNode(mid.val);

   if(head === mid) return root;

   root.left = sortedListToBST(head);
   root.right = sortedListToBST(mid.next);

   return root;
};