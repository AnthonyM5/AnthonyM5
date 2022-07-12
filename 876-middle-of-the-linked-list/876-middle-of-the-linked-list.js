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
const middleNode = (head) => {
    const values = [];
    
    let node = head;
    
    while (node) {
        values.push(node);
        node = node.next;
    }
    
    const mid = Math.floor(values.length / 2);

    return values[mid] || null;
};