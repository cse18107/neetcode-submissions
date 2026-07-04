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
    if (!root) return "";

    const queue = [root];
    const res = [];

    while (queue.length) {
        const node = queue.shift();

        if (!node) {
            res.push("#");
            continue;
        }

        res.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
    }

    return res.join(",");
}

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
deserialize(data) {
    if (!data) return null;

    const nodes = data.split(",");
    const root = new TreeNode(Number(nodes[0]));
    const queue = [root];

    let i = 1;

    while (queue.length) {
        const node = queue.shift();

        // left child
        if (nodes[i] !== "#") {
            node.left = new TreeNode(Number(nodes[i]));
            queue.push(node.left);
        }
        i++;

        // right child
        if (nodes[i] !== "#") {
            node.right = new TreeNode(Number(nodes[i]));
            queue.push(node.right);
        }
        i++;
    }

    return root;
}
}
