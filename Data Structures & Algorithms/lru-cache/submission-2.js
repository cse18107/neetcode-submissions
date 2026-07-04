class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = [];
        this.k = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let ind = -1;
        for(let i=0;i<this.cache.length;i++){
            if(this.cache[i].key===key){
                ind = i;
                break;
            }
        }
        if(ind===-1) return -1;
        let val = this.cache[ind];
        this.cache.splice(ind, 1);
        this.cache.push(val);
        return val.val;

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        
        let ind = -1;
        for(let i=0;i<this.cache.length;i++){
            if(this.cache[i].key===key){
                ind = i;
                break;
            }
        }
       
        if(ind!==-1){
            let val = this.cache[ind];
            this.cache.splice(ind, 1);
            val.val=value;
            this.cache.push(val);
        }else{
            if(this.k<=0)this.cache.shift();
            this.cache.push({key: key, val: value});
            this.k=this.k-1;
        }

        console.log(this.cache, this.k);
    }
}
