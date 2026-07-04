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
        let max = this.getDepth(root, 0);
        return max;
    }
    getDepth(root, level){
        if(root===null) return level;
        let leftDepth = this.getDepth(root.left, level+1);
        let rightDepth = this.getDepth(root.right, level+1);
        return leftDepth>rightDepth?leftDepth:rightDepth;
    }
}
