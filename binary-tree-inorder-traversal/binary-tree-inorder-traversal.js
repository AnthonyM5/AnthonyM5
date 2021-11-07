/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
    const stack = [];
    const result = [];
    
    while (root || stack.length > 0) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            let current = stack.pop();
            result.push(current.val);
            root = current.right
        }
    }
    return result
};