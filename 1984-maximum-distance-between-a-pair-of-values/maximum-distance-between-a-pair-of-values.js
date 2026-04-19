/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    
    //Maximum Distance Between a Pair of Values:
    let max = 0;
    let i = 0;
    let j =0;

       while(i < nums1.length && j < nums2.length){

     
            if( nums1[i] <= nums2[j]){
              max = Math.max(max, j - i);
              j++;
            }
            else{
                i++;
            }
         }
    return max;
    /////i <= j and nums1[i] <= nums2[j]

    ///The distance of the pair is j - i

    ///Return the maximum distance of any valid pair (i, j)

    ////otherwise return 0

    //////arr is non-increasing if arr[i -1] >= arr[i] for every 1 <= arr.length

};