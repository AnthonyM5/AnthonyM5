/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head === null) return null;

    let currentNode = head;
    let previousNode = head;
    let currentIndex = 0;

    while (currentNode !== null) {
    currentNode = currentNode.next;
    currentIndex++;
    }
    currentNode = head;

    if (n - currentIndex === 0) return head.next;
    else {
        while (n < currentIndex && currentNode !== null) 
        {
          previousNode = currentNode;
          currentNode = currentNode.next;
          n++;
        }
    }
    if (currentNode === null) return null;
    previousNode.next = currentNode.next;
    return head;
}