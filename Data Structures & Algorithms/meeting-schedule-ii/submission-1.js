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
        let eventsCountEveryMoment = [];
        for (let i = 0; i < intervals.length; i++) {
            eventsCountEveryMoment.push([intervals[i].start, 1]);
            eventsCountEveryMoment.push([intervals[i].end, -1]);
        }
        console.log(eventsCountEveryMoment);
        eventsCountEveryMoment.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1]; // -1 comes before +1
            }
            return a[0] - b[0];
        });
        let maxRoomCount = 0,
            currentRoomCount = 0;
        for (let i = 0; i < eventsCountEveryMoment.length; i++) {
            currentRoomCount += eventsCountEveryMoment[i][1];
            maxRoomCount = Math.max(maxRoomCount, currentRoomCount);
        }
        return maxRoomCount;
    }
}
