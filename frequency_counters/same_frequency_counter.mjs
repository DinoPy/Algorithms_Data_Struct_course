// function that takes 2 arrays and verifies if the values in the first array are present in the 2nd but squared
// we have 2 arrays which should contain numbers as inputs
// Outputs: boolean value that returns true if they are matching the length and our condition
// Label: arr1, arr2

// same([1,2,3], [9,1,4]) // true
// same([1,5], [25,1,4]) // false (not equal length)
// same([], [1,4]) //false (not equal length)

// create a function that takes 2 inputs
const same_fc = (arr1, arr2) => {
	// check if the arrays are the same length and return false if not
	if (arr1.length !== arr2.length) return false;

	// create an object for first array
	let frequency_counter_1 = {};

	// create an object for second array
	let frequency_counter_2 = {};

	// loop over the first array and add array element as key and number of occurences as value //return false if NaN
	for (const element of arr1) {
		if (isNaN(element)) return false;
		frequency_counter_1[element] = (frequency_counter_1[element] || 0) + 1;
	}
	// loop over the second array and create an object with array element as key and number of occurences as value // return false if NaN
	for (const element of arr2) {
		if (isNaN(element)) return false;
		frequency_counter_2[element] = (frequency_counter_2[element] || 0) + 1;
	}

	console.log(frequency_counter_1, frequency_counter_2);

	// loop over the first object keys
	for (const element in frequency_counter_1) {
		// if element ** 2 isn't existent as a key in object 2 then we return false
		// else ensure the values of occurence match
		if (
			!(element ** 2 in frequency_counter_2) &&
			frequency_counter_1[element] !== frequency_counter_2[element ** 2]
		) {
			return false;
		}
	}

	// return true if we got to the end of the function
	return true;
};

console.log(same_fc([4, 5, 2, 9], [81, 16, 25, 4]));
