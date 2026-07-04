class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // let strArr = strs.split(" ");
        let encodedStr = "";
        for(let i=0;i<strs.length;i++){
            encodedStr = encodedStr+strs[i].length+"#"+strs[i];
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;
        let arr = []
        while(i<str.length){
            let j=i;
            while(str.charAt(j)!=='#'){
                j++;
            }
            let len = Number(str.slice(i, j));
            j = j+1;
            let word = str.slice(j, j+len);
            arr.push(word);
            i = j+len;
        }
        let decodedStr = arr.join(" ");
        return arr;
    }
}
