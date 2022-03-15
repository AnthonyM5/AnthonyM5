/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
    let p = headA;
    let p1 = headB;
    
    while(p !== p1){
        p = (p === null) ? headB : p.next;
        p1 = (p1 === null) ? headA : p1.next;
    }
    
    return p
};