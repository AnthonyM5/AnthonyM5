/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let ltr = "";
    let rtl = "";

    let node = head;

    while(node) {
        ltr += node.val;
        rtl = node.val + rtl;

        node = node.next;
    }

    return ltr === rtl;
};