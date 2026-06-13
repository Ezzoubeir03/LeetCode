/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    ///Weihghted Word Mapping 
///so firt i need to know the location of the index and then i shall try to do sum of the string that have latters and then  we shall use modulo, the result will be the location of the latter , this is the goal .

let result = "";
for(let word of words){
    let sum = 0;
    for(let char of word){
        let index =char.charCodeAt(0) - 97;

        sum += weights[index];
    }

    let value = sum % 26;

    let letter = String.fromCharCode(
        'z'.charCodeAt(0) - value
    );
    result += letter;
}

return result;

};