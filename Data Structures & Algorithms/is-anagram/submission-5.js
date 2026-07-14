class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false
        let sMap = {};
        let tMap = {};
        this.fillMap(sMap, s);
        this.fillMap(tMap, t);
        for(let key of Object.keys(sMap)){
            if(sMap[key]!==tMap[key]) return false;
        }
        return true;
    }

    fillMap(charMap, str){
        let strArr = str.split("");
        for(let i=0;i<strArr.length;i++){
            charMap[strArr[i]]=charMap[strArr[i]]?charMap[strArr[i]]+1:1;
        }
    }
}
