/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start-b.start);
        let last = [];
        for(let i=0;i<intervals.length;i++){
            if(i===0){
                last = intervals[i];
            }else {
                if(last.end>intervals[i].start) return false;
                last = intervals[i];
            }
        }
        return true;
    }
}
