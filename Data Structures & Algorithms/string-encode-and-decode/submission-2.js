class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        
        for (let s of strs) {
            res += s.length + "#" + s;
        }
        
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            // find the separator '#'
            let j = i;
            while (str[j] !== '#') {
                j++;
            }

            // get length
            let length = parseInt(str.slice(i, j));

            // move to start of actual string
            i = j + 1;

            // extract string of given length
            let word = str.slice(i, i + length);
            res.push(word);

            // move pointer
            i = i + length;
        }

        return res;
    }
}