class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortedArr = strs.map((str) => str.split("").sort().join(""));
        let indMap = {};
        for(let i=0;i<sortedArr.length;i++) {
            console.log(i)
            let value = sortedArr[i];
            
            indMap[value] = indMap[value] ?[...indMap[value], i]: [i];
            console.log(indMap[value], value)
        }

        let ans = [];
        for(let key of Object.keys(indMap)){
            let values = indMap[key];
            let arr = [];
            for(let i=0;i<values.length;i++){
                arr.push(strs[values[i]]);
            }
            ans.push(arr);
        }
        return ans;
    }
}
