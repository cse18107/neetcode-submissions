class Solution {
    constructor() {
        this.combinations = [];
        this.keyMap = new Map();
        this.keyMap.set("1", "");
        this.keyMap.set("2", "abc");
        this.keyMap.set("3", "def");
        this.keyMap.set("4", "ghi");
        this.keyMap.set("5", "jkl");
        this.keyMap.set("6", "mno");
        this.keyMap.set("7", "pqrs");
        this.keyMap.set("8", "tuv");
        this.keyMap.set("9", "wxyz");
    }
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length===0) return [];
        let digitsArr = digits.split("");
        this.getAllCombinations(digitsArr, 0, []);
        return this.combinations;
    }

    getAllCombinations(digitsArr, ind, combination){
        if(ind === digitsArr.length){
            this.combinations=[...this.combinations, combination.join("")];
            
            
            return;
        }

        let alpha = this.keyMap.get(digitsArr[ind]);
        console.log(alpha)
        for(let i=0;i<alpha.length;i++){
            combination.push(alpha[i]);
            this.getAllCombinations(digitsArr, ind+1, combination);
            combination.pop();
        }


    }
}
