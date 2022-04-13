# @param {Integer} n
# @return {Integer}

def fib(n,memo)
    if memo.include?(n)
        return memo[n]
    elsif n <= 1
        return 1
    else
        memo[n] = fib(n-1,memo) + fib(n-2,memo)
        return memo[n]
    end
end

def climb_stairs(n)
        memo = Hash.new(n+1)
    return fib(n,memo)
end