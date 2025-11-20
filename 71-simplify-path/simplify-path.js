/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    //Simplify Path:
    const parts = path.split('/');
    const stack = [];
    for(let p of parts){
        if(p === '' || p === '.'){
            continue;
        }
        if(p === '..'){
            if(stack.length > 0) stack.pop();
        }else {
            stack.push(p);
        }
    }
    return '/' + stack.join('/');
};