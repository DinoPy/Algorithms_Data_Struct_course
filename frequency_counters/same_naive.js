// create a function that returns true if all the elements within the array 1 are present in array 2 but squared
// Inputs: 2 arrays
// Outputs: boolean value
// Outputs can be determined from the inputs
// labels: arr1, arr2

// same([1,2,3], [1,4,9]) // true
// same([1,4,5], [25,1,16]) // true - the order does not matter
// same([1,2], [1]) // return a log + false
// same([], [1,2]) // return a log + false

// create a function that takes 2 inputs (2 arrays)
const same_naive = (arr1, arr2) => {
	// return false + log if arrays do not have the same length
	if (arr1.length !== arr2.length) {
		console.error('Arrays are not the same length');
		return false;
	}
	// loop over the the arr1
	for (i of arr1) {
		// check data type of i, if i not number return error + false
		if (typeof i !== 'number') {
			console.log('Members of array are not number type');
			return false;
		}
		// get squared value of index
		const squared_value = i * i;
		// loop over the 2nd array searching for squared value
		const is_squared_value_found = arr2.find((j) => j === squared_value);
		// if not found, return false
		if (!is_squared_value_found) return false;
	}
	// if all were found return true
	return true;
};

console.log(same_naive([1, 2, 3, 5], [4, 25, 9, 1]));
