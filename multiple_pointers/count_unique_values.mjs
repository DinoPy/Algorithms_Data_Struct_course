// count the number of unique values that are found within an array
// Inputs: one array that should have numbers
// Outputs: number
// Outputs can be determined from the inputs
// Labels: arr1, p1, p2

// countUniqueValues([-5,-5,-5,-3,0,0,0,1,5,5,5,5,9,9,9,9,25]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([1,2]) // 2

// BREAKDOWN

// create countUniqueValues function
const countUniqueValues = (arr1) => {
	// account for empty array
	if (arr1.length === 0) return 0;
	// create 2 pointers both starting from the left
	let p1 = 0;
	let p2 = 0;
	// create total_unique
	let total_unique = 1;
	// loop over the array
	for (const val in arr1) {
		console.log(val);
		// if arr1[p1] === arr1[p2] increment p1
		if (arr1[p1] === arr1[p2]) p1++;
		// if p1 !== p2 increment p1 to the value of p2 and p2 by 1
		else {
			p1 = p2;
			p2++;
			// add 1 to total_unique
			total_unique += 1;
		}
	}
	return total_unique;
};

console.log(countUniqueValues([]));
