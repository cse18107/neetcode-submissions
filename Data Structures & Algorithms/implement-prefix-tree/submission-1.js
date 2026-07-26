class PrefixTree {
    constructor() {
        this.prefixNode = new PrefixNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let temp = this.prefixNode;
        let count = 0;
        let val = word[count];
        while (count < word.length && temp.alphas[val]) {
            console.log("INSERT e-> ", val)
            temp = temp.alphas[val];
            val = word[++count];
        }
        for (let i = count; i < word.length; i++) {
            console.log("INSERT -> ", word[i]);
            temp.alphas[word[i]] = new PrefixNode();
            temp = temp.alphas[word[i]];
        }
        temp.isEnd = true;
        
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let temp = this.prefixNode;
        let count = 0;
        let val = word[count]
            
        while (count < word.length && temp.alphas[val]) {
            console.log("SEARCH -> ",val);
            temp = temp.alphas[val];
            val = word[++count];
        }
        if (count < word.length) return false;
        if (temp.isEnd) return true;
        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let temp = this.prefixNode;
        let count = 0;
        let val = prefix[0];
            
        while (count < prefix.length && temp.alphas[val]) {
            temp = temp.alphas[val];
            val = prefix[++count];
        }
        if(count<prefix.length) return false;
        return true;
    }
}

class PrefixNode {
    constructor() {
        this.alphas = {};
        this.isEnd = false;
    }
}
