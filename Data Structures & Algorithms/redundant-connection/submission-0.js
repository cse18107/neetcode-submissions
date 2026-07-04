class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const dsu = new DSU(edges.length);
        for(let i=0;i<edges.length;i++){
            if(dsu.connected(edges[i][0], edges[i][1])){
                return edges[i];
            }else {
                dsu.union(edges[i][0], edges[i][1]);
            }
        }
        return [];
    }
}

class DSU {
    constructor(n){
        this.parent = new Array(n);
        this.rank = new Array(n);
        for(let i=0;i<n;i++){
            this.parent[i] = i;
        }
    }

    find(node){
        if(this.parent[node]===node) return node;

        this.parent[node] = this.find(this.parent[node]);

        return this.parent[node];
    }

    union(x, y){
        let parentX = this.find(x);
        let parentY = this.find(y);
        console.log(x, y, parentX, parentY)
        if(this.rank[parentX]>this.rank[parentY]){
            this.parent[parentY] = parentX;
        }else if(this.rank[parentY]>this.rank[parentX]){
            this.parent[parentX] = parentY;
        }else {
            this.parent[parentX] = parentY;
            this.rank[parentX]++;
        }
    }

    connected(x, y){
        let parentX = this.find(x);
        let parentY = this.find(y);
        if(parentX===parentY) return true;
        return false;
    }
}


