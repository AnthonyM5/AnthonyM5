# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    if !(nums.bsearch_index { |num| num >= target }) 
        return nums.length
    else 
        nums.bsearch_index {|num| num >= target}
    end
        
end