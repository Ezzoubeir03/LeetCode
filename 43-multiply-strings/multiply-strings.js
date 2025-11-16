/**
 * @param {string} nums1
 * @param {string} nums2
 * @return {string}
 */
var multiply = function(nums1, nums2) {
    //Multiply Strings:
    if(nums1 === "0" || nums2 === "0") return "0";
    let n1 = nums1.length;
     let n2 = nums2.length;
     let result = new Array(n1 + n2).fill(0);
     for(let i = n1 - 1; i >= 0 ; i--){
         let d1 = nums1[i] - '0';
    for(let j = n2 - 1; j >= 0 ; j--){
        let d2 = nums2[j] - '0';
        
        let product = d1 * d2;
        let sum = product + result[i + j + 1];
        result[i + j + 1] = sum % 10;
        result[i + j] += Math.floor(sum / 10);
    }
        
     }
     let output = result.join('');
     while(output[0] === '0'){
        output = output.slice(1);
     }
    return output;
};
