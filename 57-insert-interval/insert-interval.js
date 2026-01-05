/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    ///Insert Inteval:
    //to have an output that can say about it overlapping , should compare the intervals with the newInterval and than 
    ///marge them to have a new interval:
    let result = [];
    for(let interval of intervals){
        if(interval[1] < newInterval[0]){
            result.push(interval);
        }
        else if(interval[0] > newInterval[1]){
         result.push(newInterval);
         newInterval = interval;
        }else{
         newInterval[0] = Math.min(newInterval[0], interval[0]);
         newInterval[1] = Math.max(newInterval[1], interval[1]);
        }
        
    }
    result.push(newInterval);
    return result;
    
};