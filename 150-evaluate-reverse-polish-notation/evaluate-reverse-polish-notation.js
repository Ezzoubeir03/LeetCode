/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
     ////Evaluate  Reverse Polish Notation
let stack =[];

for(let token of tokens){
    if(token === "+" || token === "-" || token === "*" || token === "/"){
        let a = stack.pop();
        let b = stack.pop();

        let result;

        if(token === "+") result =b + a;
        if(token === "-") result =b - a;
        if(token === "*") result =b * a;
        if(token === "/") result = Math.trunc(b / a);

        stack.push(result);
    } else {
        stack.push(Number(token));
    }
}
 return stack[0];
   

};