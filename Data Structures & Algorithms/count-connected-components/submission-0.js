class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let dsu = new DSU(n);
        for(let i=0;i<edges.length;i++){
            dsu.union(edges[i][0], edges[i][1]);
        }
        console.log(dsu.parent);
        let parents = [];

        for(let i=0;i<n;i++){
            let parent = dsu.find(i);
            if(!parents.includes(parent)){
                parents.push(parent);
            }
        }
        return parents.length;
    }
}

class DSU {
    constructor(n){
        this.parent = new Array(n);
        this.rank = new Array(n).fill(0);
        for(let i=0;i<n;i++){
            this.parent[i] = i;
        }
    }

    find(x){
        if(this.parent[x]===x)return x;

        this.parent[x] = this.find(this.parent[x]);

        return this.parent[x];
    }

    union(x,y){
        let parentX = this.find(x);
        let parentY = this.find(y);
        if(this.rank[parentX]>this.rank[parentY]){
            this.parent[parentY] = parentX;
        }else if(this.rank[parentY]>this.rank[parentX]){
            this.parent[parentX] = parentY;
        }else {
            this.parent[parentX] = parentY;
            this.rank[parentX]++;
        }
    }
}
