/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let profit = 0;
    let min = prices[0];
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        let curr = prices[i] - min;
        profit = Math.max(curr, profit)
    }
    return profit
};