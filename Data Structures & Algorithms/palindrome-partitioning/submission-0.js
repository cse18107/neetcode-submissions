class Solution {
    constructor() {
        this.ans = []
    }
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        this.getPartition(s, 0, []);
        return this.ans;
    }
    getPartition(s, start, parts){
        if(start===s.length){

            this.ans.push([...parts]);
            return ;
        }

        for(let i=start;i<s.length;i++){
            let sub = s.substring(start, i+1);
            if(this.isPal(sub)){
                parts.push(sub);
                this.getPartition(s, i+1, parts);
                parts.pop();
            }
        }
    }

    isPal(s){
        let charArr = s.split("");
        for(let i=0;i<charArr.length;i++){
            if(charArr[i]!==charArr[charArr.length-i-1]) return false;
        }
        return true;
    }

}
