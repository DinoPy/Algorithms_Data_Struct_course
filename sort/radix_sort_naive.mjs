// Radix helper functions

// using strings
const getDigit = (number, place) => {
	let numberString = String(number);
	let num = numberString[numberString.length - 1 - place];

	return parseInt(num ? num : 0);
};

const getNumberOfDigits = (number) => String(number).length;

// using math
const getDigit1 = (num, i) => {
    // returns the floored and absolute result of
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const getMostNumberOfDigits = (array) => {
	let maxDigits = 0;
	for (let num of array) {
		let currentNum = digitCount(num);
		// maxDigits = currentNum > maxDigits ? currentNum : maxDigits;
		maxDigits = Math.max(maxDigits, currentNum);
	}
	return maxDigits;
};

const radixSort = (array) => {
	const mostNumberOfDigits = getMostNumberOfDigits(array);

    // loop for as many digits the largest number has
	for (let i = 0; i < mostNumberOfDigits; i++) {

        // create an empty array of 10 (for each digit 0-9)
        // this type of array generation creates arrays with individual references
		const arr = Array.from({ length: 10 }, () => []);

		for (let j = 0; j < array.length; j++) {
            // goes through each digit in the array, gets the digit at i and filters the number in a bucket
			arr[getDigit(array[j], i)].push(array[j]);
		}

        // concatonates the buckets resulting in a full array of  numbers partially sorted
		array = [].concat(...arr);
	}
	return array;
};

console.log(
	radixSort([1, 2, 1, 1, 55, 23, 43, 256, 56, 324, 2, 45, 36, 86, 47, 8, 6])
);
