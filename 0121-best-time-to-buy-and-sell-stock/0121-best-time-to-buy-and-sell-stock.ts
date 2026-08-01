function maxProfit(prices: number[]): number {
    let profit = 0;
    let min = prices[0];

    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        profit = Math.max(profit, prices[i] - min)
    }
    return profit
};