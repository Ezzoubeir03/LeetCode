/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    //Reverse Linked List II :
    
    //we have an array that have integers and we have a start and end (left, right) from (left, right) that gave as an input 
    ///will chabge the ouput(array)
    //const start = left;
    //const end = right.length; 
     if(!head || left === right) return head;
     let dummy = new ListNode(0);
     dummy.next = head;
     let prev = dummy;
     for(let i = 1; i < left; i++){
        prev = prev.next;
     }
     let cur = prev.next;
     for(let i = 0; i < right - left; i++){
        let temp = cur.next;
        cur.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;   
     } 
     return dummy.next;
};