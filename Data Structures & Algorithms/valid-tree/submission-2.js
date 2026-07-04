class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;
        const dsu = new DSU(n);
 

        for(let i=0;i<edges.length;i++){
            if(dsu.isConnected(edges[i][0], edges[i][1])){
                return false;
            }
            dsu.union(edges[i][0], edges[i][1]);
        }

        return true;

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

    findParent(x){
        if(this.parent[x]===x) return x;

        this.parent[x] = this.findParent(this.parent[x]);

        return this.parent[x];
    }

    union(x, y){
        let rootX = this.findParent(x);
        let rootY = this.findParent(y);

        if (rootX === rootY) return;
        if(this.rank[rootX]>this.rank[rootY]){
            this.parent[rootY] =rootX;
        }else if(this.rank[rootY]>this.rank[rootX]){
            this.parent[rootX] = rootY;
        }else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
    }

    isConnected(x, y){
        let parentX = this.findParent(x);
        let parentY = this.findParent(y);

        if(parentX===parentY) return true;
        return false;
    }
}


