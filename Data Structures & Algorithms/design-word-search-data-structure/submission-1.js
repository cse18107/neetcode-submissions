class WordDictionary {
    constructor() {
        this.prefixNode = new PrefixNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.prefixNode;
        for (let alpha of word) {
            if (!node.charecters[alpha]) {
                node.charecters[alpha] = new PrefixNode();

                node = node.charecters[alpha];
            } else {
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
        for (let i = 0; i < word.length; i++) {
            let alpha = word[i];
            if (alpha === ".") {
                if (i === word.length - 1) {
                    for (let key of Object.keys(node.charecters)) {
                        if (node.charecters[key].isEnd) return true;
                    }
                    return false;
                }
                for (let key of Object.keys(node.charecters)) {
                    let child = node.charecters[key];
                    if (this.dfs(child, word.substring(i + 1))) return true;
                }
                return false;
            } else {
                if (!node.charecters[alpha]) return false;
                node = node.charecters[alpha];
            }
        }
        if (!node.isEnd) return false;
        return true;
    }

    dfs(node, word) {
        for (let i = 0; i < word.length; i++) {
            let alpha = word[i];
            if (alpha === ".") {
                if (i === word.length - 1) {
                    for (let key of Object.keys(node.charecters)) {
                        if (node.charecters[key].isEnd) return true;
                    }
                    return false;
                }
                for (let key of Object.keys(node.charecters)) {
                    let child = node.charecters[key];
                    if (this.dfs(child, word.substring(i + 1))) return true;
                }
                return false;
            } else {
                if (!node.charecters[alpha]) return false;
                node = node.charecters[alpha];
            }
        }
        if (!node.isEnd) return false;
        return true;
    }
}

class PrefixNode {
    constructor() {
        ((this.charecters = {}), (this.isEnd = false));
    }
}
