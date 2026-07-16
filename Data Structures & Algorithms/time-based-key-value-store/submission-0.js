class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([timestamp, value]);
    }

    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        const arr = this.keyStore.get(key);

        let left = 0;
        let right = arr.length - 1;
        let ans = "";

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (arr[mid][0] <= timestamp) {
                ans = arr[mid][1];      // possible answer
                left = mid + 1;         // try to find a larger valid timestamp
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }
}