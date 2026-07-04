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
        let res = this.getBalancedRes(root);
        return res.ans;
    }
    getBalancedRes(root) {
        if(root===null) return {ans: true, max: 0};
        let left = this.getBalancedRes(root.left);
        let right = this.getBalancedRes(root.right);
        if(!left.ans || !right.ans) return {ans: false, max: Math.max(left.max, right.max)+1};
        if(Math.abs(left.max-right.max)<=1){
            return {ans: true, max: Math.max(left.max, right.max)+1};
        }else {
            return {ans: false, max: Math.max(left.max, right.max)+1};
        }
    }
}
