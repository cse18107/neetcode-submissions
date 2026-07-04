class Solution {
    buildTree(preorder, inorder) {
        if (!preorder.length || !inorder.length) return null;

        const rootVal = preorder[0];
        const root = new TreeNode(rootVal);

        const inIndex = inorder.indexOf(rootVal);

        const leftInorder = inorder.slice(0, inIndex);
        const rightInorder = inorder.slice(inIndex + 1);

        const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
        const rightPreorder = preorder.slice(1 + leftInorder.length);

        root.left = this.buildTree(leftPreorder, leftInorder);
        root.right = this.buildTree(rightPreorder, rightInorder);

        return root;
    }
}