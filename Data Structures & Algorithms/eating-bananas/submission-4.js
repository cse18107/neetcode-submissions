class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let totalBanana = Math.max(...piles);
        let minBananas = Infinity;
        let left = 1,
            right = totalBanana;
        while (left < right) {
            let mid = left + Math.trunc((right - left) / 2);
            if (this.canFinish(mid, piles, h)) {
                
                right=mid;
            } else left=mid+1;
        }
        return left;
    }

    canFinish(num, piles, h) {
        let totalHoursRequired = 0;
        for (let i = 0; i < piles.length; i++) {
            let numOfBananas = piles[i];

            totalHoursRequired += Math.trunc(numOfBananas / num);
            numOfBananas = Math.trunc(numOfBananas % num);

            if (numOfBananas > 0) totalHoursRequired++;
        }

        return totalHoursRequired <= h;
    }
}
