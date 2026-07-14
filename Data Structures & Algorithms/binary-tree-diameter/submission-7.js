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
        if (root.left === null && root.right === null) return 0;
        let { ans, maxLen } = this.getDiameter(root);
        return ans;
    }

    getDiameter(root) {
        if (root === null) return { ans: 0, maxLen: 0 };
        let left = this.getDiameter(root.left);
        let right = this.getDiameter(root.right);
                if(left.maxLen===0 && right.maxLen===0)return {ans:1, maxLen: 1}
        let lenThroughRoot = left.maxLen + right.maxLen;
        return {
            ans: Math.max(lenThroughRoot, Math.max(left.ans, right.ans)),
            maxLen: Math.max(left.maxLen, right.maxLen) + 1,
        };
    }
}
