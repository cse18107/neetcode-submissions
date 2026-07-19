class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let ans = 0;
        let checkWith = intervals[0];
        for (let i = 1; i < intervals.length; i++) {
            if (checkWith[1] <= intervals[i][0]) {
                checkWith = intervals[i];
                continue;
            }
            ans++;
            if(checkWith[1]>intervals[i][1]){
                checkWith = intervals[i];
            }
        }
        return ans;
    }
}
