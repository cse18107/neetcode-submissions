class Solution {
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);

        const getHours = (k) => {
            let hours = 0;
            for (let pile of piles) {
                hours += Math.ceil(pile / k);
            }
            return hours;
        };

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (getHours(mid) <= h) {
                right = mid; // try smaller k
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}