# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
    
    return head if head.nil?

    @prev = nil
    
    while head
        @current = head
        head = head.next
        @current.next = @prev
        @prev = @current
    end

    @prev
end