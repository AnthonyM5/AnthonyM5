/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    let seen = new Set();
    seen.add(n);
    
    while (true) {
		n = sumOfSquares(n)
		if (n === 1) return true
		if (seen.has(n)) return false
		seen.add(n)
	}
};

const sumOfSquares = (n) => {
    let sum = 0
	while (n) {
		sum += (n % 10) ** 2
		n = Math.floor(n / 10)
	}
	return sum
}

