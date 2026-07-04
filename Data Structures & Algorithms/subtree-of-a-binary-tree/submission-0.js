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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(root===null || subRoot===null) return false;
        let resIsSubRoot = false;
        if(root.val===subRoot.val){
            resIsSubRoot = this.checkIsSubRoot(root, subRoot);
        }
        let left = this.isSubtree(root.left, subRoot);
        let right = this.isSubtree(root.right, subRoot);
        return resIsSubRoot || left || right;
    }
    checkIsSubRoot(root, subRoot){
        if(root===null && subRoot===null) return true;
        if(root===null || subRoot===null) return false;
        if(root.val!==subRoot.val) return false;
        return this.checkIsSubRoot(root.left, subRoot.left) && this.checkIsSubRoot(root.right, subRoot.right);
    }
}
