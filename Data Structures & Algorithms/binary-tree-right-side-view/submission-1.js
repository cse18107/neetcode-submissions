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
     * @return {number[]}
     */
    rightSideView(root) {
                if(root===null) return [];
        let queue = [];
        let helper = [];
        let res = [];
        let arr = [];
        queue.push(root);
        while(queue.length>0){
            const node = queue.shift();
            helper.push(node);
            arr.push(node.val);
            if(queue.length===0){
                res.push(arr);
                arr= [];
                while(helper.length>0){
                    const n = helper.shift();
                    if(n.left) queue.push(n.left);
                    if(n.right) queue.push(n.right);
                }
            }

        }
        let ans=[];
        res.forEach((arr)=> {
            console.log(arr);
            ans.push(arr[arr.length-1]);
        });
        return ans;
    }
}
