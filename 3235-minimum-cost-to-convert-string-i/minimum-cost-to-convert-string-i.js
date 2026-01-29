/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {

    /////changing a -> b cost 10 
    ////changing   a -> c cost 2
    /////chaning   c -> cost 2.

    const inf = Infinity;
    const minCost = Array.from({length: 26}, () => Array(26).fill(inf));

    for(let i = 0; i < 26; i++){
        minCost[i][i] = 0;
    }
    for(let i = 0; i < original.length; i++){
        const u = original[i].charCodeAt(0) - 97;
        const v = changed[i].charCodeAt(0) - 97;
        minCost[u][v] = Math.min(minCost[u][v], cost[i]); 
    }

    for(let k = 0; k < 26; k++){
        for(let i = 0; i < 26; i++){
            for(let j = 0; j < 26; j++){
                if(minCost[i][k] !== inf && minCost[k][j] !== inf){
                    minCost[i][j] = Math.min(minCost[i][j], minCost[i][k] + minCost[k][j]);
                }
            }
        }

    }
    let totalCost = 0; 
    for(let i = 0; i < source.length; i++){
        if(source[i] === target[i]) continue;

        const u = source.charCodeAt(i) - 97;
        const v = target.charCodeAt(i) -  97;

        if(minCost[u][v]=== inf) return -1;
        totalCost += minCost[u][v];
    }
    return totalCost;
};