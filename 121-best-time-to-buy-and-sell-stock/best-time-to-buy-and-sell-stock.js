/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //Best Time to Buy and to Sell Stock:
    let lowerPrice = Infinity;
    let biggestPrice = 0;
    for(let i = 0; i < prices.length; i++){
    if(prices[i] < lowerPrice){
        lowerPrice = prices[i];
    }
    else
    {
        biggestPrice = Math.max(biggestPrice, prices[i] - lowerPrice);
    }
}
     return biggestPrice;
};