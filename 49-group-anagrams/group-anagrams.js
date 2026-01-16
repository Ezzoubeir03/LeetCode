/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
     ///group Anagrams 

   /// the answer is going to be in any Order:
    const map = new Map();
    for(let word of strs){
        const key = word.split('').sort().join('');
        if(!map.has(key)){
    map.set(key, []);
}
map.get(key).push(word);
    }
    return Array.from(map.values());
};