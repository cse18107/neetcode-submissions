class PrefixTree {
    constructor() {
        this.prefixNode = new PrefixNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.prefixNode;
        for (let alpha of word) {
            if (!node.charecters[alpha]) {
                node.charecters[alpha] = new PrefixNode();
              
                node = node.charecters[alpha];
            }else {
                node = node.charecters[alpha];
            }
        }
        node.isEnd = true;
       
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.prefixNode;
        for (let alpha of word) {
            if (!node.charecters[alpha]) return false;
            node = node.charecters[alpha];
        }
        if (!node.isEnd) return false;
        return true;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.prefixNode;
        for (let alpha of prefix) {
            if (!node.charecters[alpha]) return false;
            node = node.charecters[alpha];
        }
        return true;
    }
}

class PrefixNode {
    constructor() {
        ((this.charecters = {}), (this.isEnd = false));
    }
}
