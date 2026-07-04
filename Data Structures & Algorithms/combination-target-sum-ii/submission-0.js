class Solution {
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const res = [];

        const backtrack = (start, path, remaining) => {
            
            // 🎯 Found valid combination
            if (remaining === 0) {
                res.push([...path]);
                return;
            }

            for (let i = start; i < candidates.length; i++) {

                // 🔥 Skip duplicates at same level
                if (i > start && candidates[i] === candidates[i - 1]) continue;

                // 🚫 Stop early (pruning)
                if (candidates[i] > remaining) break;

                path.push(candidates[i]);

                backtrack(i + 1, path, remaining - candidates[i]);

                path.pop();
            }
        };

        backtrack(0, [], target);
        return res;
    }
}