class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;

        const sMap = new Map();
        const tMap = new Map();

        for(let i=0;i<s.length;i++){
            this.insertKeyInMap(sMap, s[i]);
            this.insertKeyInMap(tMap, t[i]);
        }

        for(const key of sMap.keys()){
            if(!tMap.get(key)) return false;
            if(tMap.get(key)!==sMap.get(key)) return false;
        }
        
        return true;
    }

    insertKeyInMap(map, key) {
        if(map.get(key)){
            map.set(key, map.get(key)+1);
        }else {
            map.set(key, 1);
        }
    }
}
