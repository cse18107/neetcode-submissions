class CountSquares {
    constructor() {
        this.points = [];
        this.freq = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const [x, y] = point;

        this.points.push([x, y]);

        const key = `${x},${y}`;
        this.freq.set(key, (this.freq.get(key) || 0) + 1);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        const [x, y] = point;

        let ans = 0;

        for (const [x1, y1] of this.points) {

            // Must be a valid diagonal
            if (Math.abs(x - x1) !== Math.abs(y - y1)) continue;
            if (x === x1 || y === y1) continue;

            const key1 = `${x},${y1}`;
            const key2 = `${x1},${y}`;

            ans +=
                (this.freq.get(key1) || 0) *
                (this.freq.get(key2) || 0);
        }

        return ans;
    }
}