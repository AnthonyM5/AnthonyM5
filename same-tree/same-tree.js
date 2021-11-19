/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
   
    return checkValues(p, q)
};

const checkValues = (p, q) => {
    if(!p && !q) return true;
    if(!p || !q) return false;
    if (p.val !== q.val) return false;
    
    return (checkValues(p.left, q.left) && checkValues(p.right, q.right))
}