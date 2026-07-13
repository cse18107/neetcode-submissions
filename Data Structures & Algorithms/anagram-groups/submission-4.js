class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let newArr = strs.map((str) => str.split('').sort().join(''));
        let indRec = {};
        let ans = [];
        newArr.forEach((item, i) => {
            if(!indRec[item]) indRec[item] = [i];
            else indRec[item].push(i);
        })
        for(let values of Object.values(indRec)){
            let arr = [];
            values.forEach((value) => {
                arr.push(strs[value]);
            })
            ans.push(arr);
        }
        return ans;
    }
}
