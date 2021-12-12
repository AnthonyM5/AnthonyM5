# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    sp = prices[0]
    p = 0
    
    prices.collect {|n|
        p = [p, (n-sp)].max
        sp = [sp, n].min}
    
    return p
end