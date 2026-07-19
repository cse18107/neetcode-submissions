class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        intervals.push(newInterval);
        intervals.sort((a, b) => a[0]-b[0]);

        for(let i=0;i<intervals.length-1;i++){
            if(intervals[i][1] < intervals[i+1][0]) continue;
            let newSI = Math.min(intervals[i][0], intervals[i+1][0]);
            let newSJ = Math.max(intervals[i][1], intervals[i+1][1]);
            intervals[i][0] = newSI;
            intervals[i][1] = newSJ;
            intervals.splice(i+1, 1);
            i--;
        }
        return intervals;
    }
}
