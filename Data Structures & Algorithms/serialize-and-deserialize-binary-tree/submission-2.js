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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(root===null) return "#"
        let queue = [];
        let helper = [],
            ans = [];
        queue.push(root);
        
        while (queue.length > 0) {
            
            let node = queue.shift();
            if (node === "#") {
                ans.push(node);
                continue;
            } else {
                ans.push(node.val);
            }

            if (node.left) {
                queue.push(node.left);
            } else {
                queue.push("#");
            }
            if (node.right) {
                queue.push(node.right);
            } else {
                queue.push("#");
            }
            
        }
        console.log(ans)
        return ans.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(data==="#") return null;
        let nodes = data.split(",");
        let queue = [], helper = [], i=1;
        queue.push(new TreeNode(Number(nodes[0])));
        let ans = queue[0];
        console.log(queue)
        while(queue.length>0){
            let node = queue.shift();
            if(nodes[i]!=="#"){
                node.left = new TreeNode(Number(nodes[i]));
                helper.push(node.left);
            }
            i++;

            if(nodes[i]!=="#"){
                node.right = new TreeNode(Number(nodes[i]));
                helper.push(node.right);
            }
            i++;

            if(queue.length===0){
                while(helper.length>0){
                    queue.push(helper.shift());
                }
            }

        }
        return ans;
    }
}
