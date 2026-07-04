class Twitter {
    constructor() {
        this.time = 0;
        this.userTweets = new Map();   // userId → tweets
        this.followMap = new Map();    // userId → followees
    }

    postTweet(userId, tweetId) {
        if (!this.userTweets.has(userId)) {
            this.userTweets.set(userId, []);
        }

        this.userTweets.get(userId).push([this.time++, tweetId]);
    }

    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        }

        this.followMap.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }

    getNewsFeed(userId) {
        const maxHeap = [];

        const pushHeap = (time, tweetId) => {
            maxHeap.push([time, tweetId]);
            maxHeap.sort((a, b) => b[0] - a[0]); // max heap via sort
        };

        // Step 1: include self
        const users = new Set();
        users.add(userId);

        if (this.followMap.has(userId)) {
            for (let f of this.followMap.get(userId)) {
                users.add(f);
            }
        }

        // Step 2: collect tweets
        for (let u of users) {
            if (this.userTweets.has(u)) {
                let tweets = this.userTweets.get(u);
                
                // only last 10 needed
                for (let i = tweets.length - 1; i >= Math.max(0, tweets.length - 10); i--) {
                    pushHeap(tweets[i][0], tweets[i][1]);
                }
            }
        }

        // Step 3: get top 10
        const res = [];
        let count = 0;

        while (maxHeap.length > 0 && count < 10) {
            res.push(maxHeap.shift()[1]);
            count++;
        }

        return res;
    }
}