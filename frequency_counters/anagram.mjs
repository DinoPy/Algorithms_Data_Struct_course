// write a function that verifies if each letter found in the first string is found in the second as well as the number of occurences
// Inputs: 2 strings
// Outputs: boolean value
// Outputs can be determined from the inputs dirrectly
// Labels: str1, str1, fc1, fc2

// validAnagram('aaz', 'zaa') // true
// validAnagram('ab', 'abb') //false
// validAnagram('','') //true
// validAnagram(2, 'ab') //false

// create a function that takes 2 strings
const validAnagram = (str1, str2) => {
	// if lengths not equal return false
	if (str1.length !== str2.length) return false;
	// create an object fc1
	let fc1 = {};
	// create an object fc2
	let fc2 = {};
	// loop over the first string and populate the fc1 with the letter as a key and the value as the number of occurences
	for (const letter of str1) {
		fc1[letter] = (fc1[letter] || 0) + 1;
	}

	for (const letter of str2) {
		if (!fc1[letter]) return false;
		fc1[letter] -= 1;
		console.log(fc1);
	}
	// loop over the second string and populate fc2 with letter as key and the value as the number of occurences
	// for (const letter of str2) {
	// 	fc2[letter] = (fc2[letter] || 0) + 1;
	// }
	// // loop over the first object's key and compare the key and value
	// for (const key in fc1) {
	// 	if (fc1[key] !== fc2[key]) return false;
	// }
	// return true if we got to the end of the function
	return true;
};

console.log(validAnagram('texttwisttime', 'timetwisttext'));
