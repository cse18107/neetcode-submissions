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
    maxDepth(root) {
        if(root===null) return 0;
        let left = this.maxDepth(root.left)+1;
        let right = this.maxDepth(root.right)+1;
        return Math.max(left, right)
    }
}
