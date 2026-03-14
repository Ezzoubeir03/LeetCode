
var MinStack = function() {
    
};

/** 
 * @param {number} val
 * @return {void}
 */

 var MinStack = function(){
  this.stack = [];
  this.minStack = [];
 };
MinStack.prototype.push = function(val) {
   // MinStack minStack = new MinStack();

   this.stack.push(val);

   if(this.minStack.length === 0 || val <= this.getMin()){
    this.minStack.push(val);
   }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    //minStack.pop();
    const popped = this.stack.pop();

    if(popped === this.getMin()){
        this.minStack.pop();
    }
    return popped;
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    //minStack.top();
    return this.stack[this.stack.length - 1];

    };

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    //minStack.getMin();


    return this.minStack[this.minStack.length -1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */