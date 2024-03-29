/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = (root) => {
    if(!root) return []
    
    const dfs = (node) => {
        let res = []
        res.push(node.val)
        
        if (node.children?.length) {
            res = res.concat(...node.children.map((v) => dfs(v)))
         }
        return res
    }
        return dfs(root)
};