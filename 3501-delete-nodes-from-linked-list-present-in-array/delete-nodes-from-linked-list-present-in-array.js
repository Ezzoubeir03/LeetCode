/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    //our target is to Delete Nodes From the Linked List Present in Array
    const Delete = new Set(nums);
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;

    while(current)
    {
        if(Delete.has(current.val)){
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }
    return dummy.next;
};