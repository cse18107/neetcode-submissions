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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if(intervals.length===0) return 0;
        let start = Infinity, end = -Infinity;
        for(let i=0;i<intervals.length;i++){
            start = Math.min(start, intervals[i].start);
            end = Math.max(end, intervals[i].end);
        }
        let rooms = -Infinity, count = 0;
        for(let time=start;time<=end;time++){
            for(let i=0;i<intervals.length;i++){
                if(time>=intervals[i].start && time<intervals[i].end){
                    count++;
                }
            }
            rooms = Math.max(rooms, count);
            count = 0;
        }
        return rooms;
    }
}
