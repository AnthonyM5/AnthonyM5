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
var swapPairs = function(head) {
    let counter = 1;
    let nodeList = head
    
    while(head) {
        if (counter % 2 && head.next) {
            let current = head.val;
            head.val = head.next.val;
            head.next.val = current;
        }
            head = head.next;
            counter++
    }
        return nodeList;
};