/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
 ///Partition List:
 let lessdummy = new ListNode(0);
 let greatdummy  = new ListNode(0);

let less = lessdummy;
let great = greatdummy;
while(head !== null){
    if(head.val < x){
        less.next = head;
        less = less.next;
      
    } else {
      great.next = head;
      great = great.next;
     }
    head = head.next;
  }
    great.next = null;
    less.next = greatdummy.next;

    return lessdummy.next;
};