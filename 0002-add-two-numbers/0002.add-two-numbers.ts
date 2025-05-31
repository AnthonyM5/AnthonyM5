/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    /** 
    
    1. Create a new linked list return that as the result
    2. Track the current sum
    3. Track remainders
    4. Iterate through both L1 and L2 (are they the same length?) If l1 || l2.next is not null continue
    5. Combine L1.val and L2.val, if value doesn't exist in one list, assume it's 0 and sum the other value.  Calculate the sum, if it's greater than 9 calculate the remainder otherwise remainder remains 0
    6. Each sum is it's own node in our new linked list; l3.next = sum; remainder carries over to an
    7. Return at the end of l1 || l2, whichever is longer.
    **/

    let l3 = new ListNode()
    let res = l3
    let remainder = 0
    let sum = 0
    
    while (l1 || l2) {
        sum = remainder + (l1 ? l1.val : 0) + (l2 ? l2.val : 0)
        
        if (sum > 9) {
        remainder = Math.floor(sum/10)
        sum %= 10
        } else {
            remainder = 0
        }
        
        
        l3 = l3.next = new ListNode(sum)
        
        l2 = l2 ? l2.next : null 
        l1 = l1 ? l1.next : null
        
    } 
    
    if (remainder !== 0) {
        l3.next = new ListNode(remainder)
    }
    
    return res.next
    
    
};