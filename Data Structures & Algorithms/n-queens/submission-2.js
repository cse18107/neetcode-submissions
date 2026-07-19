class Solution {
    constructor() {
        this.combinations = [];
    }
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        console.log(n);
        this.getAllCombinations(0, n, []);
        let ans = [];

        for (let i = 0; i < this.combinations.length; i++) {
            let row = [];
            for (let j = 0; j < this.combinations[i].length; j++) {
                let str = new Array(n).fill(".");
                str[Number(this.combinations[i][j])] = "Q";
                row.push(str.join(""));
            }
            ans.push(row);
        }

        return ans;
    }

    getAllCombinations(ind, n, combination) {
        if (ind === n) {
            this.combinations.push([...combination]);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (this.isValidPos(ind, i, n, combination)) {
                combination.push(i);
                this.getAllCombinations(ind + 1, n, combination);
                combination.pop();
            }
        }
    }
    isValidPos(ind, indj, n, combination) {
        let l = ind - 1,
            k = indj - 1;
        while (l >= 0 && k >= 0) {
            if (combination[l] === k) return false;
            l--;
            k--;
        }
        l = ind - 1;
        k = indj + 1;
        while (l >=0 && k < n) {
            if (combination[l] === k) return false;
            l--;
            k++;
        }

        for (let i = ind - 1; i >= 0; i--) {
            if (combination[i] === indj) return false;
        }
        return true;
    }
}
