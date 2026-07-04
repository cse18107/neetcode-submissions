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
    diameterOfBinaryTree(root) {
        if(root.left===null && root.right===null) return 0;
        let res = this.getDiameter(root);
        return res.ans;
    }
    getDiameter(root){
        if(root===null) return {ans:0, max: 0};
        let left = this.getDiameter(root.left);
        let right = this.getDiameter(root.right);
        if(left.max===0 && right.max===0)return {ans:1, max: 1}
        return {ans: Math.max(Math.max(left.ans, right.ans), left.max+right.max), max: Math.max(left.max, right.max)+1}
    }
}
