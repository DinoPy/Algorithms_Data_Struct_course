const insertion_sort = (arr) => {
	for (let i = 1, n = arr.length; i < n; i++) {
		const val = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > val; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = val;
	}
	return arr;
};

// const insertion_sort = (arr) => {
// 	// loop over the array once starting from 1 so inner loop can be 0
// 	for (let i = 1, n = arr.length; i < n; i++) {
// 		// save the variable located at arr[i]
// 		let currentValue = arr[i];
// 		console.log(currentValue);
// 		let j = i - 1;
// 		// loop over the sorted part of the array backwards
// 		while (j >= 0 && currentValue < arr[j]) {
// 			arr[j + 1] = arr[j];
// 			j--;
// 		}
// 		arr[j + 1] = currentValue;
// 		console.log(arr);
// 	}
// 	return arr;
// };

console.log(insertion_sort([1, 2, 4, 30, 11, 53, 16, 200, -3]));
