/**
 * Problem: Reverse Linked List (LeetCode 206)
 * 
 * Description:
 * Given the head of a singly linked list, reverse the list and return the reversed list.
 * 
 * Example:
 * Input: 1 -> 2 -> 3 -> 4 -> 5
 * Output: 5 -> 4 -> 3 -> 2 -> 1
 * 
 * Approach Explanation:
 * 1. We use three pointers: prev, curr, and next
 * 2. For each node, we need to reverse its pointer to point to the previous node
 * 3. We iterate through the list, at each step:
 *    - Save the next node (so we don't lose it)
 *    - Reverse the current node's pointer to point to prev
 *    - Move prev and curr one step forward
 * 
 * Time Complexity: O(n) where n is the number of nodes
 * Space Complexity: O(1) as we only use three pointers
 * 
 * Pseudo code:
 * Initialize prev = null, curr = head
 * While curr is not null:
 *    Save next = curr.next
 *    Point curr.next to prev
 *    Move prev to curr
 *    Move curr to next
 * Return prev (which is now the new head)
 * 
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
var reverseList = function(head) {
    let prev = null ;
    let next = null;
    let curr = head
    
    while (curr !== null) {
        next = curr.next
        curr.next = prev 
        prev = curr
        curr = next 
    }
    return prev
};