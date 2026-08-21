class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let ans = [];
        this.getPartition(s, 0, ans, []);

        return ans;
    }

    getPartition(s, ind, ans, cons){
        if(ind===s.length) {
            ans.push([...cons]);
            return;
        }
        
        for(let i=ind;i<s.length;i++){
            console.log(i)
            let str = s.substring(ind, i+1);
            if(this.isPal(str)){
                cons.push(str);
                this.getPartition(s, i+1, ans, cons);
                cons.pop();
            }

        }

    }
    isPal(str){
        return str.split("").reverse().join("") === str;
    }
}
