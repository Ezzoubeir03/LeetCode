/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // let merged = [];
    // let start = 0;
    // let end = intervals.length;
    // intervals.sort((a,b)=> a[0]- b[0]);
    // ///Merge Intervals :
    // /////I am going to a sign intervals[i] = [start[i], end[i]]
    // for(let i = start ; i < end; i++){
    
    // }
    if(intervals.length <= 1) return intervals;
    intervals.sort((a,b)=>a[0] - b[0]);
    const merged = [];
    for(let i = 0; i < intervals.length; i++){
        const [start, end] = intervals[i];
        if(merged.length === 0 || start > merged[merged.length - 1][1]){
            merged.push([start, end]);
        }
        else{
            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                end
            );
        }
    }
    return merged;
};