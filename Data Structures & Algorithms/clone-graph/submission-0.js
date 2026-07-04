class Solution {
    cloneGraph(node) {
        if (!node) return null;

        const map = new Map(); // original → clone

        const dfs = (node) => {
            // already cloned
            if (map.has(node)) return map.get(node);

            // create clone
            const clone = new Node(node.val);
            map.set(node, clone);

            // clone neighbors
            for (let neighbor of node.neighbors) {
                clone.neighbors.push(dfs(neighbor));
            }

            return clone;
        };

        return dfs(node);
    }
}