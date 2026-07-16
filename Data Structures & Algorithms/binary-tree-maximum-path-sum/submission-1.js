class Solution {
    maxPathSum(root) {
        let maxSum = -Infinity;

        function dfs(node) {
            if (!node) return 0;

            // Step 1: compute left & right
            let left = Math.max(0, dfs(node.left));
            let right = Math.max(0, dfs(node.right));

            // Step 2: compute path THROUGH this node
            let current = left + right + node.val;

            // Step 3: update global max
            maxSum = Math.max(maxSum, current);

            // Step 4: return best single path to parent
            return node.val + Math.max(left, right);
        }

        dfs(root);
        return maxSum;
    }
}