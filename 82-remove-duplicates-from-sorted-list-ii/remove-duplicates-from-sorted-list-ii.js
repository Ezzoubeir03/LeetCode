/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
     ////Remove the Duplicutes From Sorted List II: 
     //what i did here is not correct 
    ///if(head.length === 0) return 0;
    /// as defualt i give to the write pointer a value which means(1):
   /// let pointer = 1; 
    ///here it is the read pointer in this for loop 
   // for(let i = 1; i < head.length; i++){
    //if(head[i] !== head[i - 1]){
     //    head(pointer) = head(i);
       //  pointer++;
    //}
   // }
     ////1.we need to delete the all the nodes that have duplicate numbers.
  ///return pointer ;
  let dummy = new ListNode(0);///This create a fake(dummy) node before the head, why we need it ?? 
  
  ///Because sometimes the first read node are duplicates and must be removed .
  dummy.next = head;

//   while(current && current.next){

//     if(current.val === current.next.val){

//         current.next = current.next.next;

//     }else {
//         current = current.next;
//     }
//   }

//   return head;

let prev = dummy;
let current = head;


while(current){
    if(current.next && current.val === current.next.val){
    
    let dup = current.val;
    while(current && current.val === dup){
        current = current.next;
    }
    prev.next = current;
    }
    else{
        prev= current;
        current = current.next;
    }
}
return dummy.next;
};