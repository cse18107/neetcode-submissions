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
     * @return {boolean}
     */
    isBalanced(root) {
        return this.getIsBalanced(root).ans;
    }
    getIsBalanced(root){
        if(root===null) return {ans: true, len: 0};
        let left = this.getIsBalanced(root.left);
        let right = this.getIsBalanced(root.right);
        if(!left.ans||!right.ans) return {ans: false, len: 0};
        let diff = Math.abs(left.len-right.len);
        if(diff>1) return {ans: false, len: 0};
        return {ans: true, len: Math.max(left.len, right.len)+1};
    }
}
