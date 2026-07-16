class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let ans = [];
        candidates.sort();
        this.generateCombination(candidates, 0, target, ans, []);
        return ans;
    }

    generateCombination(candidates, i, target, ans, cons){
        if(target===0){
            ans.push([...cons]);
            return;
        }
        if(target<0) return;
        if(i>candidates.length-1) return;

        cons.push(candidates[i]);
        this.generateCombination(candidates, i+1, target-candidates[i], ans, cons);
        i++
        while(i<candidates.length && candidates[i]===candidates[i-1])i++;
        cons.pop();
        this.generateCombination(candidates, i, target, ans, cons);
    }
}
