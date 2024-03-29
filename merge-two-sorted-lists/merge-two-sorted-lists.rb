# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists(l1, l2)
    return l2 if l1.nil?
    return l1 if l2.nil?
    
    if l1.val > l2.val
        l1, l2 = l2, l1
    end
    
    l1.next = merge_two_lists(l1.next, l2)
    return l1
end