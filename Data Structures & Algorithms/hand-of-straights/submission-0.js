class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

        // Count frequency
        const freq = new Map();

        for (const card of hand) {
            freq.set(card, (freq.get(card) || 0) + 1);
        }

        // Sort cards
        hand.sort((a, b) => a - b);

        // Always start from the smallest unused card
        for (const card of hand) {
            if (freq.get(card) === 0) continue;

            for (let i = 0; i < groupSize; i++) {
                const curr = card + i;

                if (!freq.has(curr) || freq.get(curr) === 0) {
                    return false;
                }

                freq.set(curr, freq.get(curr) - 1);
            }
        }

        return true;
    }
}