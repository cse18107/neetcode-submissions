class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);

        // if endWord not present → impossible
        if (!wordSet.has(endWord)) return 0;

        let queue = [beginWord];
        let steps = 1;

        while (queue.length > 0) {
            let size = queue.length;

            for (let i = 0; i < size; i++) {
                let word = queue.shift();

                // reached target
                if (word === endWord) return steps;

                // generate neighbors
                for (let j = 0; j < word.length; j++) {
                    for (let c = 97; c <= 122; c++) {
                        let newWord = word.slice(0, j) + String.fromCharCode(c) + word.slice(j + 1);

                        if (wordSet.has(newWord)) {
                            queue.push(newWord);
                            wordSet.delete(newWord); // mark visited
                        }
                    }
                }
            }

            steps++;
        }

        return 0;
    }
}
