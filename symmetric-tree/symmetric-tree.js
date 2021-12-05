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
 * @return {boolean}
 */
const isSymmetric = (root) => {
    return isEqual(root.left, root.right)
};

const isEqual = (t1,t2) => {
    if (!t1 || !t2) return !t1 && !t2;
    return t1.val === t2.val && isEqual(t1.left, t2.right) && isEqual(t1.right, t2.left);
}