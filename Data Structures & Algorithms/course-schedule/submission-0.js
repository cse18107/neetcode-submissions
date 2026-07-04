class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let depArr = Array.from({ length: numCourses }, () => []);;
   
        for(let i=0;i<prerequisites.length;i++){
  
            depArr[prerequisites[i][1]].push(prerequisites[i][0]);

        }
        console.log(depArr)
        let degree = new Array(numCourses).fill(0);
        console.log(degree);
        for(let i=0;i<depArr.length;i++){
            for(let j=0;j<depArr[i].length;j++){
                
                degree[depArr[i][j]]++;
            }
        }
        console.log(degree)
        let queue = [];
        for(let i=0;i<depArr.length;i++){
            if(degree[i]===0){
                queue.push(i);
            }
        }
        while(queue.length>0){
            let course = queue.pop();
            for(let i=0;i<depArr[course].length;i++){
                let ind = depArr[course][i];
                degree[ind]--;
                if(degree[ind]===0){
                    queue.push(ind);
                }
            }
        }
        for(let i=0;i<degree.length;i++){
            if(degree[i]>0)return false;
        }
        return true;
    }
}
