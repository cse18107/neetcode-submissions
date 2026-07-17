class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let ans = []
        this.getPartitions(s,0, ans, []);
        return ans;
    }

    getPartitions(s, start, ans, cons){
        console.log(s, cons);
        if(start===s.length){
            ans.push([...cons]);
            return;
        }

        for(let i =start;i<s.length;i++){
            let part1 = s.substring(start,i+1);
            console.log(part1)
            if(this.isPal(part1)){
                cons.push(part1);
                this.getPartitions(s, i+1, ans, cons);
                cons.pop();
            }
        }
        

    }

    isPal(s){
        return s === s.split("").reverse().join("");
    }
}
