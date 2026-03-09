/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
   ///copy List with Random Pointer
   
   ////as i see the input and output i assume that the input and output have the same result:

   //return head;

   if(!head) return null;

   let map = new Map();
   let current = head;

   while(current){

    map.set(current, new _Node(current.val));
    current = current.next;
   }
   
   current = head;
   while(current){
    let copy = map.get(current);

    copy.next = current.next ? map.get(current.next) : null;
    copy.random = current.random ? map.get(current.random) : null;

    current = current.next;
   }
   return map.get(head);
    
};