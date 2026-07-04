class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Step 1: Frequency map
        const freqMap = {};
        for (let num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }

        // Step 2: Buckets (index = frequency)
        const buckets = Array(nums.length + 1).fill().map(() => []);

        for (let num in freqMap) {
            const freq = freqMap[num];
            buckets[freq].push(Number(num));
        }

        // Step 3: Collect top k from highest freq
        const res = [];
        for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
            for (let num of buckets[i]) {
                res.push(num);
                if (res.length === k) break;
            }
        }

        return res;
    }
}