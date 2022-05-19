/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
    let bits = n.toString(2).split("").reverse();

		let m = 32 - bits.length;
		if (m > 0) {
			while (m--) {
			   bits.push("0") 
			}

		}
		return parseInt(bits.join(""), 2);
};