class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const events = [];

        for (const interval of intervals) {
            events.push([interval.start, 1]);
            events.push([interval.end, -1]);
        }

        // If start and end are same,
        // process end first so the room can be reused
        events.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            }

            return a[0] - b[0];
        });

        let rooms = 0;
        let maxRooms = 0;

        for (const [time, change] of events) {
            rooms += change;
            maxRooms = Math.max(maxRooms, rooms);
        }

        return maxRooms;
    }
}