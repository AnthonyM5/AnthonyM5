/**
 * Problem: Valid Parentheses (LeetCode 20)
 * 
 * Description:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid. String is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 
 * Example:
 * Input: s = "()[]{}"
 * Output: true
 * Input: s = "([)]"
 * Output: false
 * 
 * Approach Explanation:
 * 1. Use a stack to keep track of opening brackets
 * 2. Create a mapping of opening to closing brackets
 * 3. For each character:
 *    - If it's an opening bracket, push its corresponding closing bracket
 *    - If it's a closing bracket, check if it matches the top of stack
 * 4. String is valid if stack is empty at the end
 * 
 * Time Complexity: O(n) - we traverse the string once
 * Space Complexity: O(n) - in worst case, all characters are opening brackets
 * 
 * Pseudo code:
 * Create brackets mapping
 * Initialize empty stack
 * For each char in string:
 *    If char is opening bracket:
 *        Push corresponding closing bracket to stack
 *    Else:
 *        If stack is empty or top doesn't match char:
 *            Return false
 * Return true if stack is empty
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]] !== undefined) {
            stack.push(brackets[s[i]])
        } else {
            if (stack.pop() !== s[i]) {
                return false
            }
        }
    }
    return stack.length > 0 ? false : true
};