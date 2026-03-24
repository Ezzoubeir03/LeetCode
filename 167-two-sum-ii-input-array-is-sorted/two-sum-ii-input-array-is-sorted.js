/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    ///Two Sum II -Input Array Is Sorted 

    const map = new Map();

    for(let i = 0; i < numbers.length; i++){
    let c = target - numbers[i];
    if(map.has(c)){
        return [map.get(c) + 1, i + 1];
    }
     map.set(numbers[i], i);
    }
return null;

};