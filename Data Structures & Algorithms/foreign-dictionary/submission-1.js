class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adj = new Map();
        const indegree = new Map();

        // Step 1: initialize nodes
        for (let word of words) {
            for (let char of word) {
                adj.set(char, new Set());
                indegree.set(char, 0);
            }
        }

        // Step 2: build graph
        for (let i = 0; i < words.length - 1; i++) {
            let w1 = words[i];
            let w2 = words[i + 1];

            // ❗ invalid prefix case
            if (w1.length > w2.length && w1.startsWith(w2)) {
                return "";
            }

            let len = Math.min(w1.length, w2.length);

            for (let j = 0; j < len; j++) {
                if (w1[j] !== w2[j]) {
                    if (!adj.get(w1[j]).has(w2[j])) {
                        adj.get(w1[j]).add(w2[j]);
                        indegree.set(w2[j], indegree.get(w2[j]) + 1);
                    }
                    break; // only first difference matters
                }
            }
        }

        // Step 3: BFS (Kahn’s)
        const queue = [];
        for (let [char, deg] of indegree) {
            if (deg === 0) queue.push(char);
        }

        let result = "";

        while (queue.length > 0) {
            let char = queue.shift();
            result += char;

            for (let nei of adj.get(char)) {
                indegree.set(nei, indegree.get(nei) - 1);
                if (indegree.get(nei) === 0) {
                    queue.push(nei);
                }
            }
        }

        // Step 4: cycle check
        if (result.length !== adj.size) return "";

        return result;
    }
}
