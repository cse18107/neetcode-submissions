class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const helperStack = [];
        while(this.minStack.length>0 && this.minStack[this.minStack.length-1]<val){
            let top = this.minStack.pop();
            helperStack.push(top);
        }
        this.minStack.push(val);
        while(helperStack.length>0){
            let top = helperStack.pop();
            this.minStack.push(top)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        let top = this.stack.pop();
        const helperStack = [];
        while(this.minStack.length>0&&this.minStack[this.minStack.length-1]!==top){
            let val = this.minStack.pop();
            helperStack.push(val);
        }
        if(this.minStack.length>0) this.minStack.pop();
        while(helperStack.length>0){
            let val = helperStack.pop();
            this.minStack.push(val);
        }
        return top
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length-1];
    }
}
