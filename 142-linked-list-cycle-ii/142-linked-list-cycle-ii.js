/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
    if(!head || !head.next) return null
  let p1 = head
  let p2 = head
  let index = head
  
  while (p2 && p2.next){
    p1 = p1.next
    p2 = p2.next.next
    
    if(p1 === p2) break
  }
  
  if(p1 !== p2) return null
   
  while(index !== p1){
    index = index.next
    p1 = p1.next
  }
  return p1
};