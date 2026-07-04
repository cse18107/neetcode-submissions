/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        
        const dfs = (root, maxSoFar) => {
            if(root==null)return 0;
            let count = 0;
            if(root.val>=maxSoFar){
                count++;
                maxSoFar = root.val;
            }
            count+=dfs(root.left, maxSoFar);
            count+=dfs(root.right, maxSoFar);
            return count;
        }
        return dfs(root, root.val);

    }
}
