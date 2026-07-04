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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let ans = 0;
        const inOrder = (root) => {
            if(root===null) return null;

             inOrder(root.left);
            if(k>0){
                k--;
            }
            if(k===0) {
                ans=root.val
                k=-1;
            }
            inOrder(root.right);
        }
        inOrder(root);
        return ans;
    }
}
